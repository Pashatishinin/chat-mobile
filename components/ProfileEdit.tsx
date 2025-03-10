import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styleProfile from "@/styles/profile.styles";
import profile from "@/assets/profile.avif"
import CustomButton from "./CustomButton";
import {Ionicons} from '@expo/vector-icons';
import FormField from "./FormField";
import * as ImagePicker from "expo-image-picker"

interface ProfileProps {
    setOpenEdit: any,
    openEdit: boolean
}


const ProfileEdit = ({ setOpenEdit, openEdit} : ProfileProps) => {

    const handleEditOpen = () => {
        setOpenEdit(false);
    }

    const [form, setForm] = useState({
        fullName: "Peter Parker",
        email: "peterparker1@gmail.com",
        username: "@peterparker1"
    });

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
        <View style={styleProfile.container_profile}>
            <Text style={styleProfile.h1}>Edit Profile</Text>
            
            <View style={styleProfile.box_edit}>
                <Image 
                source={ImageSelected ? {uri: ImageSelected.uri} : profile} 
                style={styleProfile.img}/>
                <TouchableOpacity style={styleProfile.icon}>
                    
                    <Ionicons 
                name="camera" 
                size={25} 
                color={"black"}
                onPress={pickImage}
                />
                </TouchableOpacity>
                
                

            </View>
            
           <FormField 
           title="" 
           value={form.fullName}
           handleChange={(e: any) => 
            setForm({...form, fullName: e,})}
           placeholder="Full Name"
           otherStyles={{marginTop: 28}}/>
           <FormField 
           title="" 
           value={form.username}
           handleChange={(e: any) => 
            setForm({...form, username: e,})}
           placeholder="Username"
           otherStyles={{marginTop: 2}}/>
            <FormField 
           title="" 
           value={form.email}
           handleChange={(e: any) => 
            setForm({...form, email: e,})}
           placeholder="Email"
           otherStyles={{marginTop: 2}}/>
            <CustomButton 
            title="Update"
            handlePress={handleEditOpen}
            containerStyles={styleProfile.btn3}
            textStyles={styleProfile.btn_text}/>
             <CustomButton 
            title="Cancel"
            handlePress={handleEditOpen}
            containerStyles={styleProfile.btn2}
            textStyles={styleProfile.btn_text}/>
            
        </View>
    )
}

export default ProfileEdit