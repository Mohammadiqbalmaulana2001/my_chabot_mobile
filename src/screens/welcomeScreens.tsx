import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function welcomeScreens() {
    return (
        <SafeAreaView className = "flex-1 flex justify-around bg-white">
            <View className = "space-y-2">
                <Text className = "text-center text-4xl font-bold text-gray-700">
                    M_L4BQ1_bot
                </Text>
                <Text className = "text-center tracking-wider text-gray-600 font-semibold ">
                    masa depan ada di sini, didukung oleh AI
                </Text>
            </View>
            <View className= "flex-row justify-center">
                <Image source={require('../../assets/images/welcome.png')} className = "w-72 h-72"/>
            </View>
            <TouchableOpacity className = "bg-emerald-500 mx-5 p-5 rounded-2xl">
                <Text>

                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}