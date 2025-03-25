import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { OtpInput } from "react-native-otp-entry";

const correctCode = "1111";

const verifyOtp = () => {
  const { email } = useLocalSearchParams();

  const [form, setForm] = useState({
    code: "",
  });

  const [isInputActive, setIsInputActive] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false); // Состояние для ошибки
  const [errorMessage, setErrorMessage] = useState(""); // Сообщение об ошибке

  const handleOtpChange = (text: string) => {
    setForm({ code: text });

    // If 4 input are entered button is active
    setIsInputActive(text.length === 4);
  };

  const handleVerifyCode = () => {
    if (form.code === correctCode) {
      // Если код правильный, продолжаем выполнение
      setIsError(false);
      router.push({ pathname: "/fullname", params: { email } });
    } else {
      // Если код неверный, показываем ошибку
      setIsError(true);
      setErrorMessage("Неверный код. Попробуйте снова.");
      Alert.alert("Ошибка", "Неверный код, попробуйте еще раз.");
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
                Verification Code
              </Text>

              <Text
                style={{
                  color: "gray",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Enter the code we sent to {email}
              </Text>
            </View>

            <View
              style={{
                marginTop: 40,
                marginLeft: 22,
                marginRight: 80,
              }}
            >
              <OtpInput
                numberOfDigits={4}
                onTextChange={handleOtpChange}
                focusColor={"#57B77D"}
                focusStickBlinkingDuration={400}
                theme={{
                  pinCodeContainerStyle: {
                    width: 60,
                    height: 60,
                    borderRadius: 20,
                  },
                  pinCodeTextStyle: {
                    color: "#ffffff",
                    fontSize: 24,
                  },
                }}
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
              handlePress={handleVerifyCode}
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

export default verifyOtp;
