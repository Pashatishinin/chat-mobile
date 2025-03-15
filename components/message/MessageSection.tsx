import { View, Text, Image, Alert } from "react-native"
import React, { useState } from "react"
import messages from '@/data/message.json'

interface MessageType {
    id: number;
    isSendByMe: boolean;
    message:string
}

const profile = require("@/assets/avatar.jpg");

const MessageSection = () => {

    
    

    return (
        <>
        {messages.map((message: MessageType) => (
            <View key={message.id}
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
            
        </View>
        ))}
         
        </>
       
    )
}

export default MessageSection