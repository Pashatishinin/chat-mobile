import { View, Text, Image } from "react-native";
import React from "react";
import styleProfile from "@/styles/profile.styles";
import profile from "@/assets/logo.png"
import CustomButton from "./CustomButton";

const Profile = () => {
    return (
        <View style={styleProfile.container_profile}>
            <Text style={styleProfile.h1}>Profile</Text>
            <Image source={profile} style={styleProfile.img}/>
            <Text style={styleProfile.h2}>Peter Parker</Text>
            <Text style={styleProfile.h3}>@peterparker1</Text>
            <Text style={styleProfile.h3}>peterparker1@gmail.com</Text>
            <CustomButton 
            title="Edit Profile"
            handlePress={() => null}
            containerStyles={styleProfile.btn}
            textStyles={styleProfile.btn_text}/>
            <CustomButton 
            title="Sign OUT"
            handlePress={() => null}
            containerStyles={styleProfile.btn2}
            textStyles={styleProfile.btn_text}/>
        </View>
    )
}

export default Profile