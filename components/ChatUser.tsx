import { View, Text, Image } from "react-native"
import React from "react"


const profile = require("@/assets/avatar.jpg");

import styleRequest from "@/styles/request.styles";

const ChatUser = () => {
     return (
        <View style={{
            paddingVertical: 16,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        width: "100%"
        }}>
            <View style={{
                display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        width: "100%"
            }}>
                <View style={{
                    position:'relative'
                }}>
                     <Image style={{
                        width: 60,
        height: 60,
        borderRadius: 100
                     }} source={profile}/>
                     <View style={{
                        position: "absolute",
                        width: 16,
                        height: 16,
                        backgroundColor: "green",
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: "white",
                        bottom: 0,
                        right: 0
                     }}></View>
                </View>
               
            <View style={{}}>
                <Text style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: 700,
                    marginBottom: 1
                }}>
                    Peter Parker</Text>

                <Text style={{
                    fontSize: 12,
                    color: "gray",
                    fontWeight:700,
                    marginBottom: 1
                }}>
                    2 days ago</Text>
                
                
                
            </View>
            </View>
            
        </View>
    )
}

export default ChatUser