import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import logo from "@/assets/logo2.png"
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { Ionicons } from "@expo/vector-icons";

const fullname = () => {

    const [form, setForm] = useState({
            email: "",
            password: ""
        })
    
        const [isInputActive, setIsInputActive] = useState(false);

        const [isLoading, setIsLoading] = useState(false)


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
                                        }}>What's your name?</Text>
                                        <Text style={{
                                            color: "gray",
                                            fontSize: 16,
                                            fontWeight: 400
                                        }}>Write your name. You can change it back in settings</Text>
                                    </View>
                                    <View style={{
                                        marginTop: 40,
                                        marginHorizontal:22
                                    }}>
                                      
                <FormField 
                icon_color={
                    isInputActive ? "#5f7cd2" : "gray"
                }
                title="Name" 
                icon="person"
                value={form.email}
                handleChange={(e: any) => {
                    setForm({
                        ...form, email: e,
                    });
                    setIsInputActive(e.length > 0);
                }}
                otherStyles={{
                    borderColor: isInputActive ? "#5f7cd2" : "gray"
                }}
                placeholder="Name"/>
                                    </View>
                </View>
                
                
                <View style={{
                    paddingHorizontal: 22
                }}>
                    <CustomButton title={'Next'}
                    handlePress={() => {
                        router.push('/verify')
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



export default fullname