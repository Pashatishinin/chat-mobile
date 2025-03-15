import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from "react-native";
import React from "react";


interface CustomButtonProps {
    title: string;
    handlePress : (event: GestureResponderEvent) => void;
    containerStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    isLoading?: boolean
}


const CustomButton = ({
    title, 
    handlePress, 
    containerStyles, 
    textStyles, 
    isLoading
}: CustomButtonProps) => {
    return (
        <TouchableOpacity 
        onPress={handlePress}
        style={[styles.btn, containerStyles, isLoading ? styles.hover : styles.hover2] } >
            <Text style={textStyles}>{isLoading ? "Loading..." : title}</Text>
        </TouchableOpacity>
       
    )
}


const styles = StyleSheet.create({
    btn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    hover: {
        opacity: 50
    },
    hover2: {
        opacity: 100
    }
})

export default CustomButton