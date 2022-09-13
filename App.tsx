import * as React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import CustomerScreen from './screens/CustomerScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (

    // @ts-ignore - TailwindProvider is missing a type definition
    // npm run dev:tailwind

    <TailwindProvider utilities={utilities}>
      <NavigationContainer>

        <CustomerScreen />
      </NavigationContainer>
    </TailwindProvider>
  );
}