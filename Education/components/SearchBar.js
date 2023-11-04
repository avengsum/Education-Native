import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function SearchBar() {
  return (
    <View className = 'flex flex-row p-2 rounded-md bg-white shadow-2xl m-2 mr-2 mt-4 items-center '>
      <AntDesign name="search1" size={24} color="gray" />
      <TextInput placeholder='Search' />
    </View>
  )
}