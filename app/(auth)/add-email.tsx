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
import FormField from "@/components/FormField";

const addEmail = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const [isInputActive, setIsInputActive] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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
                What's your email address?
              </Text>

              <Text
                style={{
                  color: "gray",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                We will send you the verification code
              </Text>
            </View>
            <View
              style={{
                marginTop: 30,
                marginHorizontal: 22,
              }}
            >
              <FormField
                title="Email"
                value={form.email}
                handleChange={(e: any) => {
                  setForm({
                    ...form,
                    email: e,
                  });
                  setIsInputActive(e.length > 0);
                }}
                otherStyles={{
                  borderColor: isInputActive ? "#57B77D" : "#6E8597",
                }}
                placeholder="Enter your email..."
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
                router.push("/verify-otp");
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

export default addEmail;
