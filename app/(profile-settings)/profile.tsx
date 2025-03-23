import {View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import Profile from "@/components/Profile";
import styleProfile from "@/styles/profile.styles";
import ProfileEdit from "@/components/ProfileEdit";

const profile = () => {

    const [openEdit, setOpenEdit] = useState(false)
    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    }
    
    return (
        <SafeAreaView style={styleProfile.container}>
            <ScrollView>
                {openEdit ? 
                <ProfileEdit 
                setOpenEdit={setOpenEdit} 
                openEdit={openEdit}/> 
                : <Profile 
                setOpenEdit={setOpenEdit} 
                openEdit={openEdit}
                />}
                
            </ScrollView>

        </SafeAreaView>
    )
}

export default profile;