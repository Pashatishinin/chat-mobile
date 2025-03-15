import { View, Text, Image, Alert, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import messages from '@/data/message.json'
import { Ionicons } from "@expo/vector-icons";

interface MessageType {
    id: number;
    isSendByMe: boolean;
    message:string;
    mediaURL ?:string
}

interface MessageSectionProps {
    selectedImage: any;
    setSelectedImage: any;
}

const profile = require("@/assets/avatar.jpg");

const MessageSection = ({selectedImage, setSelectedImage} : MessageSectionProps) => {

    const handleRemove = () => {
        setSelectedImage([])
    }

    

    return (
        <View>
        {messages.map((message: MessageType) => (
            
            <View 
            key={message.id}
            style={{
            width: "100%",
            paddingVertical: 12, 
            paddingHorizontal: 12,
            display: "flex",
            flexDirection: "row",
            gap:8,
            justifyContent: message.isSendByMe ? "flex-end" : "flex-start"
            
        }}>
            {!message.isSendByMe && (
                <Image source={profile} style={{
                width: 32,
                height: 32,
                borderRadius: 100
            }}/>
            )}
            
            <View style={{
                maxWidth: "70%",
                
                
            }}>
                {message.mediaURL && ( 
                    <>
                    <Image source={{uri: message.mediaURL}}
                style={{
                    width: 150,
                    height: 150,
                    resizeMode: "cover",
                    marginBottom: 8
                }}
                /></>


                    
                )}
                {message.message && (
                <View style={{
                    paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 5,
                    backgroundColor: message.isSendByMe ? "blue" : "gray"
                }}>
                    
                        <Text style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: 16
                    
                }}>{message.message}</Text>
                    
                    
                </View>
                )}
            </View>
            
        </View>
        ))}
        <>
        {selectedImage.length > 0 && (
            <View style={{
                marginBottom: 12,
                justifyContent: "flex-end",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: 12,
                position: "relative"
                
            }}>
                <Image 
                source={{uri: selectedImage[0].uri,}}
                style={{
                    height: 100,
                    width: 100,
                    resizeMode: "cover"
                }}/>
                <TouchableOpacity
                onPress={handleRemove}
                style={{
                    backgroundColor: "gray",
                    borderRadius: 100,
                    height: 32,
                    width: 32,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute"
                    }}>
                        <Ionicons 
                        style={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                        }}
                        name="close"
                        size={24}
                        color={"black"}/>

                </TouchableOpacity>
            </View>
        )}
        </>
         
        </View>
       
    )
}

export default MessageSection