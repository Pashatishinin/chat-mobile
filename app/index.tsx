import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import logo from "@/assets/logo.png"
import CustomButton from "@/components/CustomButton";

const index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ height: "100%"}}>
                <View style={styles.box}>
                    <Image source={logo} style={styles.img1}/>
                    <Text style={styles.text1}>Connet, Chat, Share Instantly with</Text>
                    <Text style={styles.text2}>CHAT</Text>
                    <CustomButton title={'Sign In'}
                    handlePress={() => {
                        router.push('/signin')
                    }}
                    containerStyles={styles.btn2}
                    textStyles={styles.text3}
                    isLoading={false}/>
                    <CustomButton title={'Sign Up'}
                    handlePress={() => {
                        router.push('/signup')
                    }}
                    containerStyles={styles.btn3}
                    textStyles={styles.text3}
                    isLoading={false}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#242424"
    },
    img1: {
        width: 160,
        height: 130,
        
    },
    box: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingHorizontal: 22
    },
    text1: {
        fontSize: 28,
        fontWeight: 900,
        color: "white",
        textAlign: "center"

    },
    text2: {
        fontSize: 28,
        fontWeight: 900,
        color: "aqua",
        textAlign: "center"

    },
    btn2: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        backgroundColor: "aqua",
        width: "100%",
        marginTop:28

        
    },

    btn3: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        backgroundColor: "aqua",
        width: "100%",
        marginVertical: 20,

        
    },
    text3: {
        fontSize:20,
        color: "white",
        fontWeight: 700,
        textTransform: "uppercase",
        width:100,
        textAlign: "center"
        
    }
})

export default index