import { View, Text, Image } from "react-native";
import React from "react";
import styleProfile from "@/styles/profile.styles";
import profile from "@/assets/profile.avif"
import CustomButton from "./CustomButton";
import { router } from "expo-router";

interface ProfileProps {
    setOpenEdit: any,
    openEdit: boolean
}


const Profile = ({ setOpenEdit, openEdit} : ProfileProps) => {

    const handleEditOpen = () => {
        setOpenEdit(true);
    }

    return (
        <View style={styleProfile.container_profile}>
            <Text style={styleProfile.h1}>Profile</Text>
            <Image source={profile} style={styleProfile.img}/>
            <Text style={styleProfile.h2}>Peter Parker</Text>
            <Text style={styleProfile.h3}>@peterparker1</Text>
            <Text style={styleProfile.h3}>peterparker1@gmail.com</Text>
            <CustomButton 
            title="Edit Profile"
            handlePress={handleEditOpen}
            containerStyles={styleProfile.btn}
            textStyles={styleProfile.btn_text}/>
            <CustomButton 
            title="Sign OUT"
            handlePress={() => router.push("/signin")}
            containerStyles={styleProfile.btn2}
            textStyles={styleProfile.btn_text}/>
        </View>
    )
}

export default Profile