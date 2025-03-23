import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { OtpInput } from "react-native-otp-entry";

const confirmOTP = () => {
  const [form, setForm] = useState({
    code: "",
  });

  const [isInputActive, setIsInputActive] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleOtpChange = (text: string) => {
    setForm({ code: text });

    // If 4 input are entered button is active
    setIsInputActive(text.length === 4);
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
                Enter the code number we sent to your email
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
              handlePress={() => {
                router.push("/reset-password");
              }}
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

export default confirmOTP;
