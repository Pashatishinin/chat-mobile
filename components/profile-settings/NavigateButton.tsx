import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface NavigateButtonProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
}

const NavigateButton = ({
  icon,
  title = "Default Title",
  handlePress,
  containerStyles,
  isLoading,
}: NavigateButtonProps) => {
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
        <Ionicons name="chevron-forward-outline" color="#6E8597" size={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  hover: {
    opacity: 50,
  },
  hover2: {
    opacity: 100,
  },
});

export default NavigateButton;
