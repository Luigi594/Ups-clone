import { View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { OrderScreenNavigationProp } from './OrdersScreen';
import { RootStackParamList } from '../navigation/RootNavigation';
import DeliveryCard from '../components/DeliveryCard';

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>;

const SingleOrderScreen = () => {

  const tailwind = useTailwind();
  const navigation = useNavigation<OrderScreenNavigationProp>()
  const { params: { order } } = useRoute<OrderScreenRouteProp>();

  useLayoutEffect(() => {

    navigation.setOptions({

        headerTitle: order.trackingItems.customer.name,
        headerTintColor: "#EB6A7C",
        headerTitleStyle: { color: 'black' },
        headerBackTitle: "Deliveries"
    })
    
  }, [order])

  return (
    <View style={tailwind('-mt-2')}>

        {/** reusable component */}
      <DeliveryCard order={order} fullWidth />
    </View>
  )
}

export default SingleOrderScreen