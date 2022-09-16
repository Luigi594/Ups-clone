import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Card, Icon } from '@rneui/themed'

type Props = {
    order: Order
}

const DeliveryCard = ({ order }: Props) => {

  const tailwind = useTailwind();

  return (
    <Card>
      <View>
        {/* <Icon name="box" type='entypo' color={} /> */}
      </View>
    </Card>
  )
}

export default DeliveryCard