import { View, Text, StyleSheet, TextInput, StyleProp, ViewStyle, TouchableOpacity } from "react-native";
import React, { useState } from "react";



import {Ionicons} from '@expo/vector-icons';

interface FormFieldProps {
    title: string,
    value: string,
    handleChange: (text:string) => void;
    otherStyles ?: StyleProp<ViewStyle>;
    placeholder: string,
    icon: keyof typeof Ionicons.glyphMap;
    icon_color: string

}

const FormField = ({title, value, otherStyles, handleChange, placeholder, icon, icon_color}: FormFieldProps) => {

    const [showPassword, setShowPassword] = useState(false)
    const isPasswordField = title.toLocaleLowerCase().includes("password")

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>{title}</Text>
            <View style={[styles.inpt_box, otherStyles, {gap:10}]}>
                <Ionicons name={icon} size={24} color={icon_color}/>
                <TextInput 
                style={styles.txt_inpt}
                value={value}
                onChangeText={handleChange}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                secureTextEntry = {isPasswordField && !showPassword}/>
                {isPasswordField && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                        <Ionicons name="eye-off" size={20} color={"gray"}/>
                    ) : 
                    <Ionicons name="eye" size={20} color={"gray"}/>}
                    
                </TouchableOpacity>
                )}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
   text1:{
    fontSize: 16,
    color: "white",
    fontWeight: 400
   },
   inpt_box: {
    width: "100%",
    height: 56,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: 'row',
    marginTop: 4

   },
   txt_inpt: {
    color: "white",
    flex: 1,
    fontWeight: 600,
    fontSize: 16,
    marginTop: 4
   }
})


export default FormField