import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';

export type RootStackParamList = {

    Main: undefined;
    MyModal: { userId: string, name: string },
    Order: { order: any }
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
    </Stack.Navigator>
  )
}

export default RootNavigation