import { View, Text , Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'


export default function Home() {
  return (
    <View className="mt-10 ml-2 h-screen bg-slate-50">
        <Header />
        <SearchBar />
    </View>
  )
}