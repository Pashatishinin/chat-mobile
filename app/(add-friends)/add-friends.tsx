import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SearchField from "@/components/SearchField";
import AddFriendCard from "@/components/AddFriendCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const AddFriends = () => {
    const [form, setForm] = useState({
        search: ""
    })

    return (
        <SafeAreaView style={{
            backgroundColor: "#242424",
            height: "100%",
            width: "100%",

        }}>
            <View style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 16,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                paddingBottom: 4,
                paddingHorizontal: 12

            }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={25} color={'gray'}/>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                    textAlign: "center",
                    flex: 1,
                    
                }}>
                    Find Friends
                </Text>
            </View>
            <ScrollView style={{
                paddingVertical: 4,

                paddingHorizontal: 16,

            }}>
                <SearchField 
                value={form.search}
                handleChange={(e: any) => setForm({
                    search: e,
                })}
                placeholder="Search username or fullname..."
                otherStyles={{
                    marginTop:8,
                    marginBottom:16
                }}
                />
               
                <AddFriendCard />
                <AddFriendCard />
                <AddFriendCard />
                <AddFriendCard />
                <AddFriendCard />
                <AddFriendCard />
                <AddFriendCard />
            </ScrollView>
        </SafeAreaView>
        
    )
}

export default AddFriends