import {StyleSheet, View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons';
import { StatusBar } from "react-native";

interface TabBarProps {
    icon: any;
    name: string;
    focused: boolean;
}

const TabIcon = ({ icon, name, focused } : TabBarProps) => {
    return (
        <View style={styles.container}>
            <Ionicons name={icon} size={22} color={focused ? "#57B77D" : "#6E8597"}/>
            <Text style={focused ? styles.textHover : styles.text1}>{name}</Text>
        </View>
    )
}

const TabLayout = () => {
    return (
        <>
        <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor: "#ffa001",
            tabBarInactiveTintColor: "#cdcde0",
            tabBarStyle: {
                backgroundColor: "#163043",
                paddingTop: 15,
                height: 80,
            }
            
        }}>
            
            <Tabs.Screen name="request" 
            options={{
                title: "Request",
                headerShown: false,
                tabBarIcon: ({color, focused}) => 
                    <TabIcon name={"Contacts"} icon={"people"} focused={focused} />
            }}/>
            <Tabs.Screen name="chat" 
            options={{
                title: "Chat",
                headerShown: false,
                tabBarIcon: ({color, focused}) => 
                    <TabIcon name={"Chats"} icon={"chatbubble-ellipses"} focused={focused} />
            }}/>
            <Tabs.Screen name="settings" 
            options={{
                title: "Settings",
                headerShown: false,
                tabBarIcon: ({color, focused}) => 
                    <TabIcon name={"Settings"} icon={"settings"} focused={focused} />
            }}/>
        </Tabs>
        <StatusBar barStyle={"light-content"}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: 60,

    },
    text1: {
        fontWeight: "normal",
        color: "#6E8597"
    },
    textHover: {
        color: "#57B77D",
        fontWeight: "600"
    }
    
})

export default TabLayout;