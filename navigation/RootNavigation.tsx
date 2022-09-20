import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';
import SingleOrderScreen from '../screens/SingleOrderScreen';

export type RootStackParamList = {

    Main: undefined;
    MyModal: { userId: string, name: string },
    Order: { order: Order }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name='Main' component={TabNavigator} />
        </Stack.Group>

        <Stack.Group screenOptions={{
          presentation: "modal"
        }}>
          <Stack.Screen options={{ headerShown: false }} name='MyModal' component={ModalScreen} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name='Order' component={SingleOrderScreen} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default RootNavigation