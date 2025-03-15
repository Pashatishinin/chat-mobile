import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const MessageInput = () => {

    const handleChange = () => {

    }

    return (
        <View style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8
        }}>
            
            <TextInput style={{
                flex: 1,
                color: "white",
                fontWeight:500,
                fontSize: 16,
                backgroundColor: "black",
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 30,
                paddingHorizontal: 16,
                paddingVertical: 6

            }} 
            value={""}
            placeholder='Message'
            placeholderTextColor="#7b7b8b"
            onChange={handleChange}
            />
            <TouchableOpacity style={{
                height:25,
                width: 25,
                marginLeft:16
            }}>
                <Ionicons name="send" size={24} color={"white"}/>
            </TouchableOpacity>
        </View>
    )
}

export default MessageInput
