import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import CustomerScreen from './screens/CustomerScreen';

export default function App() {
  return (

    // @ts-ignore - TailwindProvider is missing a type definition
    // npm run dev:tailwind
    
    <TailwindProvider utilities={utilities}>
      <CustomerScreen />
    </TailwindProvider>
  );
}