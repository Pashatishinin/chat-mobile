import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo2.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { myAxios } from "@/helper/apiServices";
import Toast from "react-native-toast-message";

const { height } = Dimensions.get("window");

const signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  const [isInputActiveName, setIsInputActiveName] = useState(false);
  const [isInputActiveEmail, setIsInputActiveEmail] = useState(false);
  const [isInputActivePassword, setIsInputActivePassword] = useState(false);
  const [isInputActivePasswordConfirm, setIsInputActivePasswordConfirm] =
    useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const response = await myAxios.post("auth/signup", form);
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: "Account created successfully",
      });
    } catch (error: any) {
      console.log("Error:", error);

      // Проверяем, есть ли ответ от сервера с деталями ошибки
      if (error.response) {
        console.log("Response error data:", error.response.data);
        Toast.show({
          type: "error",
          text1: error.response.data.message || "An error occurred",
        });
      } else if (error.request) {
        console.log("No response received:", error.request);
        Toast.show({
          type: "error",
          text1: "No response from server",
        });
      } else {
        console.log("Error message:", error.message);
        Toast.show({
          type: "error",
          text1: "Request failed: " + error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

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
              Sign Up
            </Text>
          </View>
          <View
            style={{
              gap: 20,
              marginTop: 30,
            }}
          >
            <FormField
              title="Full Name*"
              value={form.fullName}
              handleChange={(e: any) => {
                setForm({
                  ...form,
                  fullName: e,
                });
                setIsInputActiveName(e.length > 0);
              }}
              otherStyles={{
                borderColor: isInputActiveName ? "#57B77D" : "#6E8597",
              }}
              placeholder="Enter your full name..."
            />

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
            {/* <FormField
              title="Confirm Password*"
              value={form.confirmPassword}
              handleChange={(e: any) => {
                setForm({
                  ...form,
                  confirmPassword: e,
                });
                setIsInputActivePasswordConfirm(e.length > 0);
              }}
              otherStyles={{
                borderColor: isInputActivePasswordConfirm
                  ? "#57B77D"
                  : "#6E8597",
              }}
              placeholder="Re-enter your password..."
            /> */}
          </View>

          <CustomButton
            title={"Sign Up"}
            handlePress={handleSignUp}
            // handlePress={() => {
            //   router.push("/signin");
            // }}
            containerStyles={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginTop: 20,

              backgroundColor:
                isInputActiveName &&
                isInputActiveEmail &&
                isInputActivePassword &&
                isInputActivePasswordConfirm
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
              Already have an account?{" "}
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

export default signup;
