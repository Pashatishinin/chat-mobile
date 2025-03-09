import {View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo.png"
import FormField from "@/components/FormField";
import styleAuth from "../../styles/auth.styles"
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const { height } = Dimensions.get("window"); 

const resetPassword = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    return (
       <SafeAreaView style={styleAuth.container}>
        <View style={styleAuth.main_box}>
            <View style={styleAuth.box}>
                <Image 
                source={logo}
                style={styleAuth.img}
                resizeMode="contain"/>
                <Text style={styleAuth.h3}>Enter new Password</Text>
                
                
               
                
                <FormField 
                title="Password*" 
                value={form.password}
                handleChange={(e: any) => 
                    setForm({
                        ...form, password: e,
                    })
                }
                otherStyles={styleAuth.input_box}
                placeholder="Enter your password..."/>
                <FormField 
                title="Confirm Password*" 
                value={form.confirmPassword}
                handleChange={(e: any) => 
                    setForm({
                        ...form, confirmPassword: e,
                    })
                }
                otherStyles={styleAuth.input_box}
                placeholder="Re-enter your password..."/>
                
                <CustomButton title={'Change Password'}
                    handlePress={() => {
                        router.push('/signin')
                    }}
                    containerStyles={styleAuth.btn2}
                    textStyles={styleAuth.text3}
                    isLoading={isLoading}/>
                    
            </View>
            </View>

       </SafeAreaView>
    )
}



export default resetPassword;