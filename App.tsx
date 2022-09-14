import * as React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';

export default function App() {
  return (

    // @ts-ignore - TailwindProvider is missing a type definition
    // npm run dev:tailwind

    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </TailwindProvider>
  );
}