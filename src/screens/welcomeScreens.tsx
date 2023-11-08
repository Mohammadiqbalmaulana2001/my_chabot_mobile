import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';



export default function welcomeScreens() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className = "flex-1 flex justify-around bg-white">
            <View className = "space-y-2">
                <Text style = {{fontSize: wp(10)}} className = "text-center text-4xl font-bold text-gray-700">
                    M_L4BQ1_bot
                </Text>
                <Text style = {{fontSize: wp(4)}}  className = "text-center tracking-wider text-gray-600 font-semibold ">
                    masa depan ada di sini, didukung oleh AI
                </Text>
            </View>
            <View className= "flex-row justify-center">
                <Image source={require('../../assets/images/welcome.png')} style = {{width:wp(75), height:wp(75)}}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className = "bg-emerald-500 mx-5 p-5 rounded-full">
                <Text style={{fontSize: wp(7)}} className = "text-center font-bold text-bold text-white text-xl">
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}