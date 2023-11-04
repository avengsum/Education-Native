import { View, Text , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import {useOAuth } from '@clerk/clerk-expo';
import { useUser } from '@clerk/clerk-expo';

export default function Login() {
  const { isLoaded, isSignedIn, user } = useUser();

  const {startOAuthFlow} = useOAuth({strategy:"oauth_google"})

  const handleGoogle = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }


  }, []); 
  return (
    <View>
      <Image  source={require('./../assets/home.png')} />
      <View className="pt-5 mt-[-20px] bg-[#fff] rounded-t-[30px]">
      <Text className="text-3xl pt-10 text-center font-bold">Welcome to our World</Text>
      </View>
      <TouchableOpacity onPress={handleGoogle} className="mt-32">
        <Text className="text-center mt-8 font-medium text-lg">Login/Signup</Text>
        <View className="w-[250px] ml-20 p-4 mt-5  flex flex-row rounded-lg bg-blue-500">
        <AntDesign name="google" size={24} color="white" />
        <Text className=" ml-4 text-white">Sign In with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}