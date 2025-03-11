import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window"); 

const styleRequest = StyleSheet.create({
    container:{
        backgroundColor: "#242424",
        height: "100%",
        width: "100%"
    },
    request_box: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
        borderBottomColor: "white",
        borderBottomWidth: 0.3,
        paddingBottom: 4,
        paddingHorizontal: 12
    },
    request_h1: {
        color: "white",
        fontWeight: 700,
        flex: 1,
        textAlign: "center",
        fontSize: 24
    },
    container_request_user: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray'
    },
    img_request_user: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    box_request_user: {
        flex: 1
    },
    text_request_user:{
        fontSize: 18,
        color: "white",
        fontWeight: 700,
        marginBottom: 4
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    text2_request_user:{
        fontSize: 12,
        color: "gray",
        fontWeight:700,
        marginBottom: 2
    },
    text3_request_user: {
        fontSize: 12,
        color: "gray",
        fontWeight:700,
        marginBottom: 8
    }
    
})

export default styleRequest;