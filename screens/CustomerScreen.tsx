import React, { useLayoutEffect, useState } from 'react'
import { ScrollView, ActivityIndicator, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigation/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import { Divider, Image, Input } from '@rneui/themed';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';
import CustomerCard from '../components/CustomerCard';

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
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  useLayoutEffect(() => {

    navigation.setOptions({
      headerShown: false
    })

  }, [])
  
  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
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

      {/** this code in addition to render the card for all customer
       * you can filter the customer with the filter function, we use the
       * type CustomerList where we have all of them and we pass the
       * includes with the input when we type on the field above
       */}

      {loading ? <ActivityIndicator /> : (
      
        data?.getCustomers
          ?.filter((customer: CustomerList) => customer.value.name.includes(input))
          .map(({ name: ID, value: { email, name } }: CustomerResponse) => (

            <CustomerCard key={ID} name={name} email={email} userId={ID} />
          ))
      )}

    </ScrollView>
  )
}

export default CustomerScreen