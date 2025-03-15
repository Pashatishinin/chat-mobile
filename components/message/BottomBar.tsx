import { View, Text, Alert, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import MessageInput from "./MessageInput"


interface BottomBarProps {
    pickImage: any;
}


const BottomBar = ({pickImage} : BottomBarProps) => {

    


    return (
        <View style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    paddingTop: 8,
                    paddingBottom: 4,
                    borderTopWidth: 1,
                    borderTopColor: "black",
                    paddingHorizontal: 12,
                    height: 58,
                    position: "relative",
                    bottom: 0
        
                }}>
            <View>
                <TouchableOpacity onPress={pickImage}>
                    <Ionicons name="image" size={24} color={"white"}/>
                </TouchableOpacity>
                
            </View>
            <View style={{
                flex: 1,
                marginLeft: 1
            }}>
                <MessageInput />
            </View>
        </View>
    )
}

export default BottomBar