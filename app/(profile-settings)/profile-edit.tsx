import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


const profile = require("@/assets/avatar.jpg");
const { height } = Dimensions.get("window");
interface User {
  fullName: string;
  email: string;
  profilePic: string;
}

const ProfileEdit = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isInputActiveName, setIsInputActiveName] = useState(false);
  const [isInputActiveEmail, setIsInputActiveEmail] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    profilePic: "",
  });

  const [ImageSelected, setImageSelected] =
    useState<ImagePicker.ImagePickerAsset | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser); // Устанавливаем пользователя
          setForm(parsedUser);
        }
      } catch (error) {
        console.error("Ошибка загрузки пользователя:", error);
      }
    };

    loadUserData();
  }, []);

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission Denied",
        "You need to grant permission to access your photos."
      );
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImageSelected(result.assets[0]);
    }
  };

  // Сохранение данных
  const handleSave = async () => {
    try {
      

      const updatedUser = {
        ...form
      };
      await AsyncStorage.setItem("user", JSON.stringify(updatedUser));

      if (setUser) {
        setUser(updatedUser); // Обновление состояния в контексте
      }

      Alert.alert("Success", "Profile updated successfully!");
      router.push("/settings");
    } catch (error) {
      console.error("Ошибка сохранения данных:", error);
      Alert.alert("Error", "Failed to save profile.");
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#0F2637",
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            backgroundColor: "#163043",
            height: 160,
            paddingHorizontal: 24,
            paddingTop: 55,
          }}
        >
          <TouchableOpacity
            style={{
              margin: 4,
              width: 40,
              height: 40,
            }}
          >
            <Ionicons
              name="chevron-back-outline"
              size={25}
              color={"white"}
              onPress={() => {
                router.push("/settings");
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: [{ translateX: -80 }, { translateY: -80 }], // Центрируем по изображению (размер 160x160)
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ position: "relative" }}>
            <Image
              source={
                ImageSelected
                  ? { uri: ImageSelected.uri }
                  : form.profilePic
                  ? { uri: form.profilePic }
                  : profile
              }
              style={{
                width: 160,
                height: 160,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: "white",
              }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "#57B77D",
                borderRadius: 100,
                margin: 4,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="camera"
                size={25}
                color={"white"}
                onPress={pickImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 16,
            marginVertical: 120,
            height: height * 0.8,
          }}
        >
          <View
            style={{
              gap: 30,
              marginTop: 30,
            }}
          >
            <FormField
              title="Name"
              value={form.fullName}
              handleChange={(e: any) => {
                setForm({
                  ...form,
                  fullName: e,
                });
                setIsInputActiveName(e.length > 0);
              }}
              placeholder="Full Name"
              otherStyles={{
                borderColor: isInputActiveName ? "#57B77D" : "#6E8597",
              }}
            />
            <FormField
              title="Email"
              value={form.email}
              handleChange={(e: any) => {
                setForm({
                  ...form,
                  email: e,
                });
                setIsInputActiveEmail(e.length > 0);
              }}
              placeholder="Email"
              otherStyles={{
                borderColor: isInputActiveEmail ? "#57B77D" : "#6E8597",
              }}
            />
          </View>

          <CustomButton
            title="Save"
            handlePress={handleSave}
            containerStyles={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginVertical: 20,
              backgroundColor:
                isInputActiveName || isInputActiveEmail ? "#57B77D" : "#ABDBBE",
              width: "100%",
            }}
            textStyles={{
              color: "white",
              fontWeight: 700,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileEdit;
