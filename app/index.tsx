import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import logo from "@/assets/logo2.png";

const index = () => {
  // Splash screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home"); // transfer to home page
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // clean timer after
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#081C2C",
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingHorizontal: 22,
            gap: 20,
          }}
        >
          <Image
            source={logo}
            style={{
              width: 130,
              height: 130,
            }}
          />

          <Text
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "white",
              textAlign: "center",
            }}
          >
            Lastivka
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
