import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {

    Main: undefined;
    MyModal: { userId: string, name: string },
    Order: { order: any}
}

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name='Main' component={TabNavigator} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default RootNavigation