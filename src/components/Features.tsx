import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height:hp(60)}} className= "space-y-4">
        <Text style={{fontSize: wp(6)}} className= "font-semibold text-gray-600">Features</Text>
        <View className="bg-fuchsia-300 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image source={require("../../assets/images/chatgptIcon.png")} style={{width:hp(4), height:hp(4)}} />
                <Text style={{fontSize: wp(4)}} className="font-semibold text-gray-600">ChatGPT</Text>
            </View>
            <Text style={{fontSize: wp(3)}} className="text-gray-700 font-medium">
                ChatGPT dapat memberi Anda tanggapan instan dan luas, membantu Anda dengan ide-ide kreatif tentang berbagai topik.
            </Text>
        </View>

        <View className="bg-fuchsia-200 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image source={require("../../assets/images/dalleIcon.png")} style={{width:hp(4), height:hp(4)}} />
                <Text style={{fontSize: wp(4)}} className="font-semibold text-gray-600">DALL-E</Text>
            </View>
            <Text style={{fontSize: wp(3)}} className="text-gray-700 font-medium">
                DALL-E dapat menghasilkan gambar yang imajinatif dan beragam dari deskripsi tekstual, memperluas batas kreativitas visual.
            </Text>
        </View>

        <View className="bg-fuchsia-100 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image source={require("../../assets/images/smartaiIcon.png")} style={{width:hp(4), height:hp(4)}} />
                <Text style={{fontSize: wp(4)}} className="font-semibold text-gray-600">Smart AI</Text>
            </View>
            <Text style={{fontSize: wp(3)}} className="text-gray-700 font-medium">
                Asisten suara tangguh dengan kemampuan ChatGPT dan Dall-E, memberikan Anda yang terbaik dari kedua dunia.
            </Text>
        </View>
    </View>
  )
}