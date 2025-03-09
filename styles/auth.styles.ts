import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window"); 

const styleAuth = StyleSheet.create({
    container: {
        backgroundColor: "#242424",
        height: "100%"
    },
    main_box:{
        minHeight: height,
    },
    box:{
        height: height * 0.9,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 24

    },
    img: {
        width: 160,
        height: 130,
        
    },
    h3: {
        fontSize: 18,
        color: "white",
        fontWeight: 900,
        textAlign: "center",
    },
    input_box: {
        marginTop: 28
    },
    btn2: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        backgroundColor: "aqua",
        width: "100%",
        marginTop:28

        
    },
    text3: {
        fontSize:20,
        color: "white",
        fontWeight: 900,
        letterSpacing: 3,
        textTransform: "uppercase",
        width:"100%",
        textAlign: "center"
        
    },
    content_bottom: {
        justifyContent: "center",
        paddingTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: 'center'
    }, 
    content_bottom_text: {
        fontSize: 14,
        color: "gray",
        fontWeight: 400
    },
    content_bottom_forgot: {
        paddingTop: 8,
        display: "flex",
        gap: 8,
        alignItems: "center",
        justifyContent: 'flex-end',
        width: "100%",
        flexDirection:"row"
    }
})

export default styleAuth;