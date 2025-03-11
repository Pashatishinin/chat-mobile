import { View, Text, Image } from "react-native";
import React from "react";
import styleRequest from "@/styles/request.styles";
import profile from "@/assets/profile.avif"
import CustomButton from "./CustomButton";

const RequestUser = () => {
    return (
        <View style={styleRequest.container_request_user}>
            <View style={styleRequest.content}>
                <Image style={styleRequest.img_request_user} source={profile}/>
            <View style={styleRequest.box_request_user}>
                <Text style={styleRequest.text_request_user}>Peter Parker</Text>
                <Text style={styleRequest.text2_request_user}>Peter wants to connect you</Text>
                <Text style={styleRequest.text3_request_user}>2 days ago</Text>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 12
                }}>
                    <View style={{
                        flex: 1,
                        marginRight: 8
                    }}>
                    <CustomButton 
                    title="Accept"
                    handlePress={() => null}
                    containerStyles={{backgroundColor: "aqua", 
                    paddingHorizontal: 12,
                    paddingVertical: 8}}
                    textStyles={{
                        fontWeight: 600
                    }}/>
                </View>
                <View style={{
                        flex: 1,
                        
                    }}>
                    <CustomButton 
                    title="Reject"
                    handlePress={() => null}
                    containerStyles={{backgroundColor: "red", 
                    paddingHorizontal: 12,
                    paddingVertical: 8}}
                    textStyles={{
                        color: "white",
                        fontWeight: 600
                    }}/>
                </View>
                </View>
                
            </View>
            </View>
            
        </View>
    )
}

export default RequestUser