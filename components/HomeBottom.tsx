import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const HomeBottom = () => {
  return (
    <View
      style={{
        backgroundColor: "#081C2C",
        width: "100%",
        paddingTop: 24,
        paddingBottom: 4,
        paddingHorizontal: 20,
        bottom: 10,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          Stay connected with your friends and family
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "gray",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Lastivka is messaging app that will help you to connect with everyone
        </Text>
      </View>
      <CustomButton
        title={"Get Started"}
        handlePress={() => {
          router.push("/add-email");
        }}
        containerStyles={{
          width: "100%",
          alignItems: "center",
          backgroundColor: "#57B77D",
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginVertical: 20,
        }}
        textStyles={{
          color: "white",
          fontWeight: 700,
        }}
        isLoading={false}
      />
    </View>
  );
};

export default HomeBottom;
