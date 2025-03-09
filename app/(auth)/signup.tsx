import {View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo.png"
import FormField from "@/components/FormField";
import styleAuth from "../../styles/auth.styles"
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const { height } = Dimensions.get("window"); 

const signup = () => {
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
                <Text style={styleAuth.h3}>Sign Up</Text>
                <FormField 
                title="Full Name*" 
                value={form.fullName}
                handleChange={(e: any) => 
                    setForm({
                        ...form, fullName: e,
                    })
                }
                otherStyles={styleAuth.input_box}
                placeholder="Enter your full name..."/>
                
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
                
                <CustomButton title={'Sign Up'}
                    handlePress={() => {
                        router.push('/signin')
                    }}
                    containerStyles={styleAuth.btn2}
                    textStyles={styleAuth.text3}
                    isLoading={isLoading}/>
                    <View style={styleAuth.content_bottom}>
                        <Text style={styleAuth.content_bottom_text}>
                            Already have an account?{" "}
                        
                        <Link style={{color: "aqua", fontWeight: 700}} href={"/signin"}>Sign In</Link>
                        </Text>
                    </View>
            </View>
            </View>

       </SafeAreaView>
    )
}



export default signup;