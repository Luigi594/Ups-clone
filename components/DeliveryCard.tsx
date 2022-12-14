import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Card, Divider, Icon } from '@rneui/themed'
import MapView, { Marker } from 'react-native-maps'

type Props = {
    order: Order;
    fullWidth?: boolean;
}

const DeliveryCard = ({ order, fullWidth }: Props) => {

  const tailwind = useTailwind();

  /** if we pass the fullWidth prop, some things will change
   * like the view that contains the principal information
   * the background color itself and the MapView height
   */

  return (
    <Card containerStyle={[
      tailwind(`${fullWidth ? "rounded-none m-0" : "rounded-lg"} my-2`),
      {
        backgroundColor: fullWidth ? "#EB6A7C" : "#59C1CC",
        padding: 0,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
      }
    ]}>

      <View style={fullWidth && { height: "100%" }}>
        <Icon name="box" type='entypo' color={"white"} size={50}/>

        <View style={tailwind('items-start pt-5 -mt-3')}>
          <View style={tailwind('mx-auto')}>
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
        </View>

        <Card.Divider color='white' />

        <View style={tailwind('p-5')}>

          {order.trackingItems.items.map((value) => (

            <View style={tailwind('flex-row justify-between items-center')} key={value.item_id}>
                <Text style={tailwind('text-sm italic text-white')}>{value.name}</Text>
                <Text style={tailwind('text-white text-xl')}>x {value.quantity}</Text>
            </View>

          ))}
        </View>

        <MapView initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        
        /** if we have the fullWidth property grow in 1, if we don't the height will be 200 */
        style={[tailwind('w-full'), { flexGrow: 1 }, !fullWidth && { height: 200 }]}>

          {order.Lat && order.Lng && (
            
            <Marker
            
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng
              }}

              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}

        </MapView>
      </View>
    </Card>
  )
}

export default DeliveryCard