import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import logo from "@/assets/logo2.png"
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { OtpInput} from "react-native-otp-entry"

const verify = () => {

    const [form, setForm] = useState({
            code: ""
        })

        
    
        const [isInputActive, setIsInputActive] = useState(false);

        const [isLoading, setIsLoading] = useState(false)

        const handleOtpChange = (text: string) => {
        setForm({ code: text });

        // Если все 4 поля заполнены, кнопка активируется
        setIsInputActive(text.length === 4);
    };
        
        

    return (
        <SafeAreaView style={{
            backgroundColor: "#242424",
            flex:1
        }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
                        style={{
                            flex: 1
                        }}
                        keyboardVerticalOffset={40}>
            <ScrollView contentContainerStyle={{ flexGrow:1 }}>
                <View style={{
                    flex: 1,
                    marginTop:100}}>
                    
                    <View style={{
                                        gap: 10,
                                        paddingHorizontal:22
                                        
                                    }}>
                                        <Text style={{
                                            color: "white",
                                            fontSize: 28,
                                            fontWeight: 600
                                        }}>Verification Code</Text>
                                        <Text style={{
                                            color: "gray",
                                            fontSize: 16,
                                            fontWeight: 400
                                        }}>Enter the code number we sent to your email</Text>
                                    </View>
                                    <View style={{
                                        marginTop: 40,
                                        marginHorizontal:22
                                    }}>
                <OtpInput 
                numberOfDigits={4}
                onTextChange={handleOtpChange}
                focusColor={"#5f7cd2"}
                focusStickBlinkingDuration={400}
                theme={{
                    pinCodeContainerStyle: {
                        width:60,
                        height:60,
                        borderRadius: 20
                    },
                    pinCodeTextStyle: {
                            color: "#ffffff", // Цвет текста (белый)
                            fontSize: 24, // Размер шрифта
                        },
                }}/>
                                    </View>
                </View>
                
                
                <View style={{
                    paddingHorizontal: 22
                }}>
                    <CustomButton title={'Next'}
                    handlePress={() => {
                        router.push('/fullname')
                    }}
                    containerStyles={{
                        width: "100%",
                        alignItems: "center",
                        backgroundColor: isInputActive ? "#4150b4" :"#a8bee8",
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        marginVertical: 20

                    }}
                    textStyles={{
                        color: "white",
                        fontWeight: 700
                    }}
                    isLoading={false}/>
                </View>
                
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}



export default verify