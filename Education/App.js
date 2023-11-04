import {View } from 'react-native';
import Login from './pages/Login';
import { ClerkProvider,  } from '@clerk/clerk-expo';
import Constants from "expo-constants"
import Home from './pages/Home';


export default function App() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <View>
      <Home />     
    </View>
    </ClerkProvider>
  );
}

