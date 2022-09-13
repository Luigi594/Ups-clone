import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';

const CustomerScreen = () => {

  const tailwind = useTailwind();  
  
  return (
    <SafeAreaView>
      <Text>CustomerScreen</Text>
    </SafeAreaView>
  )
}

export default CustomerScreen