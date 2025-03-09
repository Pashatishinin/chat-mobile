import {View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo.png"
import FormField from "@/components/FormField";
import styleAuth from "../../styles/auth.styles"
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const { height } = Dimensions.get("window"); 

const signin = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
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
                <Text style={styleAuth.h3}>Sign In</Text>
                <FormField 
                title="Email*" 
                value={form.email}
                handleChange={(e: any) => 
                    setForm({
                        ...form, email: e,
                    })
                }
                otherStyles={styleAuth.input_box}
                placeholder="Enter your email..."/>
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
                <View style={styleAuth.content_bottom_forgot}>
                        <Text style={styleAuth.content_bottom_text}>
                            Forgot your password?{" "}
                        
                        <Link style={{color: "aqua", fontWeight: 700}} href={"/reset"}>Reset Now</Link>
                        </Text>
                    </View>
                <CustomButton title={'Sign In'}
                    handlePress={() => {
                        router.push('/chat')
                    }}
                    containerStyles={styleAuth.btn2}
                    textStyles={styleAuth.text3}
                    isLoading={isLoading}/>
                    <View style={styleAuth.content_bottom}>
                        <Text style={styleAuth.content_bottom_text}>
                            Don't have an account?{" "}
                        
                        <Link style={{color: "aqua", fontWeight: 700}} href={"/signup"}>Sign Up</Link>
                        </Text>
                    </View>
            </View>
            </View>

       </SafeAreaView>
    )
}



export default signin;