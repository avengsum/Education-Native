import { View, Text , Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';

export default function Header() {
    const { isLoaded, isSignedIn, user } = useUser();
  return (
    <View className="flex  flex-row items-center justify-between">
        <View className>
            <Text className="text-md font-light">Hello</Text>
            <Text className="text-xl">user</Text>
        </View>
        <Image source={require('../assets/user.png')} />
    </View>
  )
}