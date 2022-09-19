import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Card, Divider, Icon } from '@rneui/themed'

type Props = {
    order: Order
}

const DeliveryCard = ({ order }: Props) => {

  const tailwind = useTailwind();

  return (
    <Card containerStyle={[
      tailwind('rounded-lg my-2'),
      {
        backgroundColor: "#59C1CC",
        padding: 0,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
      }
    ]}>

      <View>
        <Icon name="box" type='entypo' color={"white"} size={50}/>

        <View>
          <Text style={tailwind('text-xs text-center mt-2 uppercase text-white font-bold')}>
            { order.carrier } - { order.trackingId }
          </Text>

          <Text style={tailwind('text-white text-center pb-3 text-lg font-bold')}>
            Expected Delivery: { new Date(order.createdAt).toLocaleDateString() }
          </Text>

          <Divider color="white" />
        </View>

        <View style={tailwind('mx-auto')}>
          <Text style={tailwind('text-base text-center text-white font-bold mt-5')}>Address</Text>
          <Text style={tailwind('text-sm text-center text-white')}>
            { order.Address }, { order.City }
          </Text>

          <Text style={tailwind('text-sm text-center italic text-white pb-3')}>
            Shipping Cost: L.{ order.shippingCost }
          </Text>
        </View>

        <Divider color='white '/>

        <View>
          {order.trackingItems.items.map((value) => (
            <View key={value.item_id}>
              <Text>{value.name}</Text>
              <Text>x {value.quantity}</Text>
            </View>
          ))}
        </View>
      </View>
    </Card>
  )
}

export default DeliveryCard