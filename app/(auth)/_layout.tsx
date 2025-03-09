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
        </Stack>
        <StatusBar backgroundColor={'#161622'}/>
        </>
        
    )
}

export default AuthLayout