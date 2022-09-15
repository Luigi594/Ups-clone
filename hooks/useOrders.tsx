import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';

function useOrders() {

  // useQuery hook from stepzen give us this three values   
  const { loading, error, data }  = useQuery(GET_ORDERS);

  // here we define the type of what Order should be
  // is an empty array of type Order we defined on typings.d.ts file
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {

    // if there's no data don't run the rest of the code
    if(!data) return;

    /** in stepzen the response it gives is inside of data
     * here I'm creating a const orders with type Order array
     * the same was defined in typing.d.ts, then we map the data
     * with the query gerOrders we have in stepzen
     */
    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
        
        carrier: value.carrier,
        createdAt: value.createdAt,
        trackingId: value.trackingId,
        trackingItems: value.trackingItems,
        shippingCost: value.shippingCost,
        Address: value.Address,
        City: value.City,
        Lng: value.Lng,
        Lat: value.Lat

    }))

    setOrders(orders);

  }, [data])

  
  return { loading, error, orders }
}

export default useOrders