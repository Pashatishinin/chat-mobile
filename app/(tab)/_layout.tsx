import {StyleSheet, View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons';

interface TabBarProps {
    icon: any;
    name: string;
    focused: boolean;
}

const TabIcon = ({ icon, name, focused } : TabBarProps) => {
    return (
        <View style={styles.container}>
            <Ionicons name={icon} size={24} color={focused ? "aqua" : "gray"}/>
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
                backgroundColor: "#161622",
                borderTopWidth: 1,
                borderTopColor: "#232533",
                paddingTop: 10
            }
            
        }}>
            <Tabs.Screen name="chat" 
            options={{
                title: "Chat",
                headerShown: false,
                tabBarIcon: ({color, focused}) => 
                    <TabIcon name={"Chat"} icon={"chatbubble"} focused={focused} />
            }}/>
            <Tabs.Screen name="request" 
            options={{
                title: "Request",
                headerShown: false,
                tabBarIcon: ({color, focused}) => 
                    <TabIcon name={"Request"} icon={"people"} focused={focused} />
            }}/>
            <Tabs.Screen name="profile" 
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({color, focused}) => 
                    <TabIcon name={"Profile"} icon={"person"} focused={focused} />
            }}/>
        </Tabs>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Центрируем элементы по вертикали
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        width: 60,

    },
    text1: {
        fontWeight: "normal",
        color: "gray"
    },
    textHover: {
        color: "aqua",
        fontWeight: "700"
    }
    
})

export default TabLayout;