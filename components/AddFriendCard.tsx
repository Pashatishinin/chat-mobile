import { View, Text, Image } from "react-native";
import React from "react";
import styleRequest from "@/styles/request.styles";

import CustomButton from "./CustomButton";

const profile = require("@/assets/avatar.jpg");

const AddFriendCard = () => {
    return (
        <View style={styleRequest.container_request_user}>
            <View style={styleRequest.content}>
                <Image style={styleRequest.img_request_user} source={profile}/>
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
                    @peterparker91</Text>
                
                
                
            </View>
            </View>
            <CustomButton 
                    title="Connect"
                    handlePress={() => null}
                    containerStyles={{backgroundColor: "green", 
                    paddingHorizontal: 12,
                    paddingVertical: 8}}
                    textStyles={{
                        color: "white",
                        fontWeight: 600
                    }}/>
        </View>
    )
}

export default AddFriendCard