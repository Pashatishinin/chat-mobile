import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window"); 

const styleProfile = StyleSheet.create({
    container:{
        backgroundColor: "#242424",
        height: "100%"
    },
    container_profile:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 24
    },
    h1: {
        fontWeight: 700,
        color: "white",
        fontSize: 24,
        letterSpacing: 5,
        textAlign: "center"
    },
    img: {
        width:130,
        height:130,
        borderRadius:100,
        marginTop: 28,
        borderWidth: 1,
        borderColor: "white"
    },
    h2: {
        marginTop: 28,
        fontSize: 32,
        color: "aqua",
        fontWeight: 600
    },
    h3: {
        marginTop: 4,
        fontSize: 16,
        color: "gray",
        fontWeight: 400
    },
    btn: {
        marginTop: 28,
        width: "100%",
        backgroundColor:"aqua",
        minHeight: 52,
    },
    btn_text:{
        width:"100%",
        textAlign:"center",
        fontSize:20,
        fontWeight:600,
        color: "white",
        letterSpacing:3,
        textTransform: "uppercase"
    },
    btn2: {
        marginTop: 28,
        width: "100%",
        backgroundColor:"red",
        minHeight: 52,
    }
})

export default styleProfile;