import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo2.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const { height } = Dimensions.get("window");

const signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isInputActiveEmail, setIsInputActiveEmail] = useState(false);
  const [isInputActivePassword, setIsInputActivePassword] = useState(false);

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
              Sign In
            </Text>
          </View>
          <View
            style={{
              gap: 30,
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
            <FormField
              title="Password*"
              value={form.password}
              handleChange={(e: any) => {
                setForm({
                  ...form,
                  password: e,
                });
                setIsInputActivePassword(e.length > 0);
              }}
              otherStyles={{
                borderColor: isInputActivePassword ? "#57B77D" : "#6E8597",
              }}
              placeholder="Enter your password..."
            />
          </View>

          <View
            style={{
              paddingTop: 8,
              display: "flex",
              gap: 8,
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#6E8597",
                fontWeight: 400,
              }}
            >
              Forgot your password?{" "}
              <Link
                style={{ color: "#57B77D", fontWeight: 700 }}
                href={"/reset"}
              >
                Reset Now
              </Link>
            </Text>
          </View>
          <CustomButton
            title={"Sign In"}
            handlePress={() => {
              router.push("/settings");
            }}
            containerStyles={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,
              backgroundColor:
                isInputActivePassword && isInputActiveEmail
                  ? "#57B77D"
                  : "#ABDBBE",
              width: "100%",
            }}
            textStyles={{
              color: "white",
              fontWeight: 700,
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
              Don't have an account?{" "}
              <Link
                style={{ color: "#57B77D", fontWeight: 700 }}
                href={"/signup"}
              >
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signin;
