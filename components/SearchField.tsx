import {View, Text, StyleProp, ViewStyle, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface SearchFieldProps {
    value: string,
    handleChange: any,
    placeholder: string,
    otherStyles ?: StyleProp<ViewStyle>

}

const SearchField = ({
    value, 
    handleChange, 
    placeholder, 
    otherStyles
} : SearchFieldProps) => {
    return (
        <View style={otherStyles}>
            <View style={{
                width: "100%",
                height: 48,
                paddingHorizontal: 16,
                backgroundColor: "black",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row"
            }}>
                <TextInput 
            style={{
                flex: 1,
                color: "white",
                fontWeight: 700,
                fontSize: 16,
            }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={"#7b7b8b"}
            onChangeText={handleChange}/>
            <TouchableOpacity>
                <Ionicons name="search" color={"gray"} size={24}/>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default SearchField