import * as React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// @ts-ignore
import { URI } from '@env'

const client = new ApolloClient({

  uri: URI ,
  cache: new InMemoryCache(),
});

export default function App() {
  return (

    // @ts-ignore - TailwindProvider is missing a type definition
    // npm run dev:tailwind

    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}