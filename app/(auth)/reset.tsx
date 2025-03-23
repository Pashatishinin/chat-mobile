import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo2.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const { height } = Dimensions.get("window");

const reset = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const [isInputActiveEmail, setIsInputActiveEmail] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: "#0F2637", height: "100%" }}>
      <View
        style={{
          minHeight: height,
        }}
      >
        <View
          style={{
            height: height * 0.9,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
            marginVertical: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 22,
              gap: 20,
            }}
          >
            <Image
              source={logo}
              style={{
                width: 160,
                height: 130,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
              }}
            >
              Reset Password
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
            }}
          >
            <FormField
              title="Email*"
              value={form.email}
              handleChange={(e: any) => {
                setForm({
                  ...form,
                  email: e,
                });
                setIsInputActiveEmail(e.length > 0);
              }}
              otherStyles={{
                borderColor: isInputActiveEmail ? "#57B77D" : "#6E8597",
              }}
              placeholder="Enter your email..."
            />
          </View>

          <CustomButton
            title={"Send OTP"}
            handlePress={() => {
              router.push("/confirm-otp");
            }}
            containerStyles={{
              paddingHorizontal: 8,
              paddingVertical: 12,
              backgroundColor: isInputActiveEmail ? "#57B77D" : "#ABDBBE",
              width: "100%",
              marginTop: 28,
            }}
            textStyles={{
              fontSize: 20,
              color: "white",
              fontWeight: 900,
              letterSpacing: 3,
              textTransform: "uppercase",
              width: "100%",
              textAlign: "center",
            }}
            isLoading={isLoading}
          />
          <View
            style={{
              justifyContent: "center",
              paddingTop: 20,
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#6E8597",
                fontWeight: 400,
              }}
            >
              Remember Password?{" "}
              <Link
                style={{ color: "#57B77D", fontWeight: 700 }}
                href={"/signin"}
              >
                Sign In
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default reset;
