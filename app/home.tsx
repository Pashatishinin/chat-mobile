import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import logo from "@/assets/logo2.png";
import HomeBottom from "@/components/HomeBottom";
import { Link } from "expo-router";

const home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#163043",
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            marginTop: 40,
            width: "100%",
            flex: 1,
            justifyContent: "center",
            height: "100%",
            paddingHorizontal: 22,
            gap: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={logo}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "white",
              textAlign: "center",
            }}
          >
            Lastivka
          </Text>
        </View>
        
        <HomeBottom />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
