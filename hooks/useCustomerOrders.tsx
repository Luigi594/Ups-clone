import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';

function useCustomerOrders(userId: string) {

    const { loading, error, data }  = useQuery(GET_ORDERS);

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        
        if(!data) return;

        // here is the same thing of the useOrders hook
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

        // return the orders from an especific customer using the userId param in the
        // function above
        const customerOrders = orders.filter(
            (order) => order.trackingItems.customer_id === userId
        )

        setOrders(customerOrders)

    }, [data, userId])

  return { loading, error, orders  }
}

export default useCustomerOrders