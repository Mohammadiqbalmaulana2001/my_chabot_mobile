import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { NativeEventEmitter, NativeModules } from 'react-native';
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessages } from '../constans';
import Voice from '@react-native-community/voice';


export default function HomeScreens() {
    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(true);
    const [result, setResult] = useState('');

        const speechStartHandler = e => {
            console.log('speech start event', e);
        };
        const speechEndHandler = e => {
            setRecording(false);
            console.log('speech stop event', e);
        };
        const speechResultsHandler = e => {
            console.log('speech event: ',e);
            const text = e.value[0];
            setResult(text);
            
        };
        
        const speechErrorHandler = e=>{
            console.log('speech error: ',e);
        }
        
        
        const startRecording = async () => {
            setRecording(true);
            // Tts.stop(); 
            try {
            await Voice.start('id-ID');
            } catch (error) {
            console.log('error', error);
            }
        };
        const stopRecording = async () => {
            try {
            await Voice.stop();
            setRecording(false);
            // fetchResponse();
            } catch (error) {
            console.log('error', error);
            }
        };
    const clear = () => {
        setMessages([]);
    }

    const stopSpeking = () => {
        setSpeaking(false);
    }

    const fetchSpeechRecognitionServices = async () => {
        try {
            const services = await Voice.getSpeechRecognitionServices();
            console.log('Speech recognition services:', services);
        } catch (error) {
            console.error('Error fetching speech recognition services:', error);
        }
    };

    useEffect(() => {

        // voice handler events
        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndHandler;
        Voice.onSpeechResults = speechResultsHandler;
        Voice.onSpeechError = speechErrorHandler;

        // Fetch services saat komponen dimuat
        fetchSpeechRecognitionServices();

        return () => {
          // destroy the voice instance after component unmounts
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    console.log('result', result);
    return (
    <View className="flex-1 bg-white">
        <SafeAreaView className= "flex-1 flex mx-5">
            <View className = "flex-row justify-center mt-3">
                <Image source={require("../../assets/images/bot.png")} style = {{width:hp(15), height:hp(15)}}/>
            </View>

            {
                messages.length > 0 ? (
                    <View className="space-y-2 flex-1">
                        <Text style={{fontSize: wp(5)}} className="text-gray-600 font-semibold ml-1">Assistant</Text>

                        <View style={{height:hp(65)}}
                        className="bg-neutral-200 rounded-3xl p-4">
                            <ScrollView bounces={false}
                            className="space-y-4"
                            showsVerticalScrollIndicator={false}>
                                {
                                    messages.map((message, index)=>{
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

              {/* recording, clear and stop buttons */}
        <View className="flex justify-center items-center">
            {
                recording ? (
                    <TouchableOpacity className="space-y-2" onPress={stopRecording}>
                    {/* recording stop button */}
                    <Image 
                        className="rounded-full" 
                        source={require('../../assets/images/voiceLoading.gif')}
                        style={{width: hp(10), height: hp(10)}}
                    />
                    </TouchableOpacity>
                    
                ) : (
                    <TouchableOpacity onPress={startRecording}>
                    {/* recording start button */}
                    <Image 
                        className="rounded-full" 
                        source={require('../../assets/images/recordingIcon.png')}
                        style={{width: hp(10), height: hp(10)}}
                    />
                    </TouchableOpacity>
                )
            }
            {
                messages.length>0 && (
                <TouchableOpacity 
                    onPress={clear} 
                    className="bg-neutral-400 rounded-3xl p-2 absolute right-10"
                >
                    <Text className="text-white font-semibold">Clear</Text>
                </TouchableOpacity>
                )
            }
            {
                speaking && (
                <TouchableOpacity
                    onPress={stopSpeking}
                    className="bg-red-400 rounded-3xl p-2 absolute left-10"
                >
                    <Text className="text-white font-semibold">Stop</Text>
                </TouchableOpacity>
                )
            }
        </View>
        </SafeAreaView>
    </View>
    )
}