import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import logo from "@/assets/logo2.png";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import Toast from "react-native-toast-message";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { myAxios } from "@/helper/apiServices";


const { height } = Dimensions.get("window");

interface User {
  _id: string;
  name: string;
  email: string;
  // profilePic: string;
}

const signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const [isInputActiveEmail, setIsInputActiveEmail] = useState(false);
  const [isInputActivePassword, setIsInputActivePassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const storeUserData = async (user: User) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      console.log("User data saved:", user); // Сохраняем данные пользователя
    } catch (error) {
      console.error("Ошибка сохранения пользователя:", error);
    }
  };


  const handleLogin = async () => {
    

    setIsLoading(true);
    try {
      const response = await myAxios.post("auth/login", form);
      console.log(response.data);
      const userData = {
        _id: response.data.user._id,
        name: response.data.user.name,
        email: response.data.user.email,
        // profilePic: response.data.profilePic,
      };

       await storeUserData(userData); // Сохраняем данные пользователя
       console.log(response.data);

      // Если логин успешен, сохранить данные пользователя
      Toast.show({
        type: "success",
        text1: "Login successful!",
      });

      // Перенаправить на главную страницу или панель
      router.push("/settings"); // Например, сюда
    } catch (error: any) {
      console.log("Error:", error);

      // Проверяем, есть ли ответ от сервера с деталями ошибки
      if (error.response) {
        console.log("Response error data:", error.response.data);
        Toast.show({
          type: "error",
          text1:
            error.response.data.message || "An error occurred during login",
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
            handlePress={handleLogin}
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
