import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessages } from '../constans';

export default function HomeScreens() {
    const [message, setMessage] = useState(dummyMessages);
    return (
    <View className="flex-1 bg-white">
        <SafeAreaView className= "flex-1 flex mx-5">
            <View className = "flex-row justify-center mt-3">
                <Image source={require("../../assets/images/bot.png")} style = {{width:hp(15), height:hp(15)}}/>
            </View>

            {
                message.length > 0 ? (
                    <View className="space-y-2 flex-1">
                        <Text style={{fontSize: wp(5)}} className="text-gray-600 font-semibold ml-1">Assistant</Text>

                        <View style={{height:hp(65)}}
                        className="bg-neutral-200 rounded-3xl p-4">
                            <ScrollView bounces={false}
                            className="space-y-4"
                            showsVerticalScrollIndicator={false}>
                                {
                                    message.map((message, index)=>{
                                        if(message.role =="assistant"){
                                            if(message.Text){
                                                return (
                                                    <View key={index} className="flex-row justify-start ">
                                                        <View className="p-2 flex rounded-2xl bg-fuchsia-300 rounded-tl-none">
                                                            <Image 
                                                            source={require("../../assets/images/iqbal.png")}
                                                            className="rounded-2xl mx-auto"
                                                            resizeMode="contain"
                                                            style={{width:wp(40), height:wp(40)}}
                                                            />
                                                            <Text style={{width:wp(65)}}>{message.Text}</Text>
                                                        </View>
                                                    </View>
                                                );
                                            }else{
                                                return(
                                                    <View key={index} style={{width:wp(70)}} className="bg-fuchsia-300 rounded-xl p-2 rounded-tl-none">
                                                        <Text>
                                                            {message.content}
                                                        </Text>
                                                    </View>
                                                )
                                            }
                                        }else{
                                            return(
                                                <View key={index} className="flex-row justify-end">
                                                    <View style={{width:wp(70)}} className="bg-fuchsia-100 rounded-xl p-2 rounded-tr-none">
                                                        <Text>{message.content}</Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    }
                                    )
                                }
                            </ScrollView>
                        </View>
                    </View>
                ):(
                    <Features/>
                )
            }
        </SafeAreaView>
    </View>
    )
}