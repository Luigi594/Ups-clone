import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/RootNavigation'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigation/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTailwind } from 'tailwind-rn/dist'
import useOrders from '../hooks/useOrders'
import { Button, Image } from '@rneui/themed'
import OrderCard from '../components/OrderCard'

export type OrderScreenNavigationProp = CompositeNavigationProp<

  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
  
>

// type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>;

const OrdersScreen = () => {

  const tailwind = useTailwind();
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  return (
    <ScrollView style={{ backgroundColor: '#EB6A7C' }}>
      <Image
      
        source={{ uri: "https://links.papareact.com/m51" }}
        containerStyle={tailwind('w-full h-64')}
        PlaceholderContent={ <ActivityIndicator />}
      />

      <View>
        <Button

          color={'pink'}
          titleStyle={{ color: 'gray', fontWeight: '400' }}
          style={tailwind('py-2 px-5')}
          onPress={() => setAscending(!ascending)}
        >
          {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
        </Button>

        {/** making the sort effect to the orders */}
        {orders?.sort((a, b) => {

          if(ascending){

            // this is the sort process, if the date of a is greater than b
            // give me 1, if it's not give me -1
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
          }
          else{

            // here's the opposite
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
          }
        }).map((order) => (

          <OrderCard key={order.trackingId} item={order}/>
        ))}
      </View>
    </ScrollView>
  )
}

export default OrdersScreen