import React, { useLayoutEffect, useState } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigation/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import { Image, Input } from '@rneui/themed';

/** Composite navigation prop, this combine the navigation,
 * here we give the correct types definitions. We have nested
 * stacks; TabNavigator contains two screens, and then we call it
 * into the RootStackNavigator, which is a Group Stack
 */
export type CustomerScreenNavigationProp = CompositeNavigationProp<

  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>

>

const CustomerScreen = () => {

  const tailwind = useTailwind();  
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>('');

  useLayoutEffect(() => {

    navigation.setOptions({
      headerShown: false
    })

  }, [])
  
  return (
    <ScrollView style={{ backgroundColor: '#59C1CC'}}>
      <Image 
        source={{
          uri: 'https://links.papareact.com/3jc'
        }}

        containerStyle={tailwind('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input placeholder='Search by Customer'
        value={input}
        onChangeText={setInput}
        containerStyle={tailwind('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  )
}

export default CustomerScreen