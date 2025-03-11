import {View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styleRequest from "@/styles/request.styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import RequestUser from "@/components/RequestUser";

const request = () => {
    return (
       <SafeAreaView style={styleRequest.container}>
            <View style={styleRequest.request_box}>
                <Text style={styleRequest.request_h1}>Request</Text>
                <Link href={"/add-friends"}>
                <Ionicons 
                name="person-add"
                size={24}
                color={"white"}/></Link>
            </View>
            <ScrollView>
                <View>
                    <RequestUser />
                    <RequestUser />
                    <RequestUser />
                    <RequestUser />
                    <RequestUser />
                    <RequestUser />
                    <RequestUser />
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}

export default request;