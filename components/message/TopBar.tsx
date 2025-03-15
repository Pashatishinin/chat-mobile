import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const profile = require("@/assets/avatar.jpg");

const TopBar = () => {
    return (
        <View style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingTop: 8,
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingHorizontal: 12,
            height: 58,
            position: "relative",
            top: 0

        }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" color={"gray"} size={24} />
            </TouchableOpacity>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 20

            }}>
                <Image source={profile} style={{
                width: 40,
                height: 40,
                alignItems: "center",
                borderRadius: 100
            }}/>
            <Text style={{
                fontSize: 24,
                color: "white",
                fontWeight: 700,
                textAlign: "center"
            }}>Peter Parker</Text>
            </View>
            
        </View>
    )
}

export default TopBar