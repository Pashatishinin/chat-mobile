import { View, Text, Alert, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import MessageInput from "./MessageInput"

import * as ImagePicker from "expo-image-picker"

const BottomBar = () => {

    const [ImageSelected, setImageSelected] = 
        useState<ImagePicker.ImagePickerAsset | null> (null)

     const pickImage = async() => {
            let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
            if(permissionResult.granted == false) {
                Alert.alert(
                    "Permission Denied",
                    "You need to grant permission to access your photos."
                )
            }
    
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1
            })
    
            if(!result.canceled) {
                setImageSelected(result.assets[0])
            }
        }    


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