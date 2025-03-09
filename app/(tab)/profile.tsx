import {View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Profile from "@/components/Profile";
import styleProfile from "@/styles/profile.styles";

const profile = () => {
    return (
        <SafeAreaView style={styleProfile.container}>
            <ScrollView>
                <Profile />
            </ScrollView>

        </SafeAreaView>
    )
}

export default profile;