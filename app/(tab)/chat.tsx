import {View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchField from "@/components/SearchField";
import ChatUser from "@/components/ChatUser"
import { Link } from "expo-router";

const chat = () => {

    const [form, setForm] = useState({
            search: ""
        })

    return (
        <SafeAreaView style={{
            backgroundColor: "#242424",
            height: "100%",
            width: "100%"
        }}>
            <View style={{
                width: "100%",
                alignItems: "center",
                marginTop: 16,
                borderBottomWidth: 1,
                paddingBottom: 4,

            }}>
                <Text style={{
                    fontSize: 24,
                    color: "white",
                    fontWeight: 500
                }}>Chats</Text>

            </View>
            <ScrollView style={{
                paddingVertical: 4,
                paddingHorizontal: 8,
                width: "100%"
                
            }}>
                 <SearchField 
                value={form.search}
                handleChange={(e: any) => setForm({
                    search: e,
                })}
                placeholder="Search username or fullname..."
                otherStyles={{
                    marginTop:8,
                    marginBottom:16,
                }}
                />
                <Link href={"/message/1"} style={{
                    width: "100%"
                }}>
                <ChatUser />
                </Link>
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />

            </ScrollView>

        </SafeAreaView>
    )
}

export default chat;