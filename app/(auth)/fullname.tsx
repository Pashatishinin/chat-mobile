import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import Toast from "react-native-toast-message";
import { myAxios } from "@/helper/apiServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  _id: string;
  name: string;
  email: string;
  // profilePic: string;
}

const fullname = () => {
  const { email, password } = useLocalSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: email,
    password: "123456",
  });

  const [isInputActive, setIsInputActive] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const storeUserData = async (user: User) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user)); 
      console.log("User data saved:", user);// Сохраняем данные пользователя
    } catch (error) {
      console.error("Ошибка сохранения пользователя:", error);
    }
  };

  const handleSignUp = async () => {
    console.log("Sending data:", form);

    setIsLoading(true);
    try {
      const response = await myAxios.post("/auth/register", form);
      console.log(response.data);

      // Сохраняем полученные данные пользователя в AsyncStorage
      const userData = {
        _id: response.data.user._id,
        name: response.data.user.name,
        email: response.data.user.email,
        // profilePic: response.data.profilePic,
      };

      console.log("User data to be saved:", userData);

      await storeUserData(userData); // Сохраняем данные пользователя
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: "Account created successfully",
      });

      router.push("/settings");
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
    <SafeAreaView
      style={{
        backgroundColor: "#081C2C",
        flex: 1,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
        keyboardVerticalOffset={40}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              marginTop: 100,
            }}
          >
            <View
              style={{
                gap: 10,
                paddingHorizontal: 22,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                What's your name?
              </Text>

              <Text
                style={{
                  color: "gray",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Write your name. You can change it back in settings
              </Text>
            </View>

            <View
              style={{
                marginTop: 40,
                marginHorizontal: 22,
              }}
            >
              <FormField
                icon_color={isInputActive ? "#57B77D" : "#6E8597"}
                title="Name"
                icon="person"
                value={form.name}
                handleChange={(e: any) => {
                  setForm({
                    ...form,
                    name: e,
                  });
                  setIsInputActive(e.length > 0);
                }}
                otherStyles={{
                  borderColor: isInputActive ? "#57B77D" : "#6E8597",
                }}
                placeholder="Name"
              />
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 22,
            }}
          >
            <CustomButton
              title={"Next"}
              handlePress={handleSignUp}
              containerStyles={{
                width: "100%",
                alignItems: "center",
                backgroundColor: isInputActive ? "#57B77D" : "#ABDBBE",
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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default fullname;
