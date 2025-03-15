import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import TopBar from "@/components/message/TopBar"
import MessageSection from "@/components/message/MessageSection"
import BottomBar from "@/components/message/BottomBar"

import * as ImagePicker from "expo-image-picker"


const Chat = () => {

    const [ImageSelected, setImageSelected] = 
            useState<ImagePicker.ImagePickerAsset[] | []> ([]);
    
    const scrollViewRef = useRef<ScrollView>(null)

    const scrollToBottom = () => {
        if (scrollViewRef.current){
            scrollViewRef.current.scrollToEnd({animated: true})
        }
    };
    
    useEffect(() => {
        scrollToBottom();
    }, [])

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
                    quality: 1
                })
        
                if(!result.canceled) {
                    setImageSelected(result.assets)
                }
            }    


    return (
        <SafeAreaView style={{
            backgroundColor: "#242424",
            height: "100%",
            width: "100%"
        }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={{
                flex: 1
            }}
            keyboardVerticalOffset={0}>
                <TopBar />
            <ScrollView ref={scrollViewRef}
            onContentSizeChange={scrollToBottom}
            style={{
                paddingTop: 4,
                flex: 1,
            }}>
                <MessageSection 
                selectedImage={ImageSelected}
                setSelectedImage={setImageSelected}
                />
            </ScrollView>
            <BottomBar pickImage={pickImage}/>
            </KeyboardAvoidingView>
            
        </SafeAreaView>
    )
}

export default Chat