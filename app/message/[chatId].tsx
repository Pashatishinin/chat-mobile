import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import TopBar from "@/components/message/TopBar"
import MessageSection from "@/components/message/MessageSection"
import BottomBar from "@/components/message/BottomBar"

const Chat = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "#242424",
            height: "100%",
            width: "100%"
        }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={{
                flex: 1
            }}
            keyboardVerticalOffset={0}>
                <TopBar />
            <ScrollView style={{
                paddingTop: 4,
                flex: 1,
            }}>
                <MessageSection />
            </ScrollView>
            <BottomBar />
            </KeyboardAvoidingView>
            
        </SafeAreaView>
    )
}

export default Chat