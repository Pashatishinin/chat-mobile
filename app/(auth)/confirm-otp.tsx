import {View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo.png"
import FormField from "@/components/FormField";
import styleAuth from "../../styles/auth.styles"
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const { height } = Dimensions.get("window"); 

const confirmOTP = () => {
    const [form, setForm] = useState({
        otp: ""
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
                <Text style={styleAuth.h3}>Enter your OTP</Text>
                <FormField 
                title="OTP*" 
                value={form.otp}
                handleChange={(e: any) => 
                    setForm({
                        ...form, otp: e,
                    })
                }
                otherStyles={styleAuth.input_box}
                placeholder="Enter your OTP..."/>
               
                
                <CustomButton title={'Verify OTP'}
                    handlePress={() => {
                        router.push('/reset-password')
                    }}
                    containerStyles={styleAuth.btn2}
                    textStyles={styleAuth.text3}
                    isLoading={isLoading}/>
                    <View style={styleAuth.content_bottom}>
                        <Text style={styleAuth.content_bottom_text}>
                            Doesn't Received OTP?{" "}
                        
                        <Link style={{color: "aqua", fontWeight: 700}} href={"/confirm-otp"}>Resend</Link>
                        </Text>
                    </View>
                    
            </View>
            </View>

       </SafeAreaView>
    )
}



export default confirmOTP;