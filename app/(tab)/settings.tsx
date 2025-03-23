import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Profile from "@/components/Profile";
import styleProfile from "@/styles/profile.styles";
import ProfileEdit from "@/components/ProfileEdit";
import { Ionicons } from "@expo/vector-icons";
import NavigateButton from "@/components/profile-settings/NavigateButton";
import { router } from "expo-router";
import SettingSwitcher from "@/components/profile-settings/SettingSwitcher.tsx";
import LogOut from "@/components/profile-settings/LogOut";

const profile = require("@/assets/avatar.jpg");

const settings = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#0F2637",
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            flex: 1,
            marginTop: 30,
            paddingHorizontal: 24,
          }}
        >
          <View
            style={{
              gap: 28,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                Settings
              </Text>
              <TouchableOpacity 
              onPress={() => {
                  router.push("/profile-edit");
                }}>
                <Ionicons name="create-outline" color={"#57B77D"} size={17} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 0.3,
                borderBottomColor: "#1F3C51",
                paddingBottom: 16,

                marginRight: 8,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Image
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 100,
                  }}
                  source={profile}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    Peter Parker
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#B3C2CE",
                      fontWeight: 500,
                      marginBottom: 1,
                    }}
                  >
                    @peterparker
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Ionicons name="qr-code-outline" color={"#57B77D"} size={22} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                gap: 20,
                borderBottomWidth: 0.3,
                borderBottomColor: "#1F3C51",
                paddingBottom: 16,

                marginRight: 8,
              }}
            >
              <NavigateButton
                icon="star-outline"
                title="Star messages"
                handlePress={() => {
                  router.push("/home");
                }}
              />
              <NavigateButton
                icon="call-outline"
                title="Last call"
                handlePress={() => {
                  router.push("/home");
                }}
              />
              <NavigateButton
                icon="folder-outline"
                title="My folder"
                handlePress={() => {
                  router.push("/home");
                }}
              />
              <NavigateButton
                icon="contrast-outline"
                title="Appearence"
                handlePress={() => {
                  router.push("/home");
                }}
              />
              <SettingSwitcher
                icon="notifications-outline"
                title="Notification"
                handlePress={() => {
                  router.push("/home");
                }}
              />
            </View>
            <View
              style={{
                gap: 20,
                paddingBottom: 16,

                marginRight: 8,
              }}
            >
              <NavigateButton
                icon="lock-closed-outline"
                title="Privacy"
                handlePress={() => {
                  router.push("/home");
                }}
              />
              <NavigateButton
                icon="server-outline"
                title="Data and storage"
                handlePress={() => {
                  router.push("/home");
                }}
              />
              <NavigateButton
                icon="help-outline"
                title="FAQ"
                handlePress={() => {
                  router.push("/home");
                }}
              />

              <LogOut
                icon="log-out-outline"
                title="Logout"
                handlePress={() => {
                  router.push("/signin");
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default settings;
