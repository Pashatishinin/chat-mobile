import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  Linking,
  Platform,
} from "react-native";



const profile = require("@/assets/avatar.jpg");
const qrCode = () => {

  const [form, setForm] = useState({
    fullName: "Peter Parker",
    email: "peterparker1@gmail.com",
  });


  
  

  

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#163043",
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 30,
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

          <View
            style={{
              marginTop: 100,
              position: "relative",
            }}
          >
            <View
              style={{
                backgroundColor: "#0F2637",
                alignItems: "center",
                paddingBottom: 20,
                paddingHorizontal: 50,
                paddingTop: 50,

                borderTopLeftRadius: 40, // Радиус для нижнего левого угла
                borderTopRightRadius: 40,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {form.fullName}
              </Text>
              <Text
                style={{
                  color: "#8EA3B3",
                  fontSize: 16,
                }}
              >
                {form.email}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#081C2C",
                alignItems: "center",
                padding: 50,
                borderBottomLeftRadius: 40, // Радиус для нижнего левого угла
                borderBottomRightRadius: 40,
              }}
            >
              <Ionicons name="qr-code-outline" color={"white"} size={250} />
            </View>
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                top: -50,
                left: "50%", // Центрируем по горизонтали
                transform: [{ translateX: -45 }],
              }}
            >
              <Image
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 100,
                }}
                source={profile}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute", // Абсолютное позиционирование
            bottom: 20, // Располагаем на расстоянии от нижней части экрана
            left: "50%", // Центрируем по горизонтали
            transform: [{ translateX: -80 }], // Сдвигаем на половину ширины кнопки (220px / 2 = 110px)
            width: 160, // Ширина кнопки
            paddingVertical: 12,
            borderRadius: 20,
            paddingLeft: 16,
            paddingRight: 20,
            backgroundColor: "#6E8597",
          }}
        >
          <TouchableOpacity >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="camera-outline" color={"white"} size={24} />
              <Text
                style={{
                  color: "white",
                }}
              >
                Scan QR code
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default qrCode