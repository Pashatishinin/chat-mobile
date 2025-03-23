import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <>
        <Stack>
            <Stack.Screen name="profile-edit" options={{headerShown: false}}/>

        </Stack>
        <StatusBar backgroundColor={'#161622'}/>
        </>
        
    )
}

export default AuthLayout