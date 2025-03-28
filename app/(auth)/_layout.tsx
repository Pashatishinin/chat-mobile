import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <>
        <Stack>
            <Stack.Screen name="signin" options={{headerShown: false}}/>
            <Stack.Screen name="signup" options={{headerShown: false}}/>
            <Stack.Screen name="reset" options={{headerShown: false}}/>
            <Stack.Screen name="confirm-otp" options={{headerShown: false}}/>
             <Stack.Screen name="reset-password" options={{headerShown: false}}/>


             <Stack.Screen name="add-email" options={{headerShown: false}}/>
             <Stack.Screen name="verify-otp" options={{headerShown: false}}/>
             <Stack.Screen name="fullname" options={{headerShown: false}}/>
        </Stack>
        <StatusBar backgroundColor={'#161622'}/>
        </>
        
    )
}

export default AuthLayout