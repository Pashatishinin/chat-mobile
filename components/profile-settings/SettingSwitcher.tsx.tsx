import { View, Text, TouchableOpacity, 
    StyleSheet, GestureResponderEvent, StyleProp, 
    ViewStyle, TextStyle, Image,
Switch } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";


interface SettingSwitcherProps {
    
    icon ?: keyof typeof Ionicons.glyphMap;
    title: string;
    handlePress : (event: GestureResponderEvent) => void;
    containerStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    isLoading?: boolean
}


const SettingSwitcher = ({
  icon,
  title = "Default Title",
  handlePress,
  containerStyles,
  isLoading,
}: SettingSwitcherProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleIsChecked = () => setIsChecked((value) => !value);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#1F3C51",
            borderRadius: 100,
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name={icon || "alert-circle-outline"}
            color="#57B77D"
            size={14}
          />
        </View>

        <Text style={{ color: "white" }}>{title || "Default Title"}</Text>
      </View>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.btn,
          containerStyles,
          isLoading ? styles.hover : styles.hover2,
        ]}
      >
        <Switch
          value={isChecked}
          onValueChange={toggleIsChecked}
          thumbColor="white"
          trackColor={{ true: "#57B77D", false: "#6E8597" }}
          ios_backgroundColor="#6E8597"
        />
      </TouchableOpacity>
    </View>
  );
};


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

export default SettingSwitcher