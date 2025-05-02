import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../rootStyles";

const styles = StyleSheet.create({
    createAccountMain: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: "100%",
        fontFamily: "Poppins-Regular",
        backgroundColor: colors.baseColor
    },

    top: {
        width: "100%",
        height: "13%",
    },

    dataContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "87%",
        backgroundColor: colors.helloText,
        borderTopLeftRadius: 100,
        alignItems: "center",
    },
    data: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    Title: {
        fontSize: 36,
        color: colors.helloText,
        fontWeight: "bold",
        fontFamily: "Poppins-Regular",
        left: 109,
        top: 36,
    },
    backArrow: {
        left: 21,
        top: 43,
        position: "absolute",
    },
    inputs: {
        width: "100%",
        height: "60%",
        justifyContent: "space-around"
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        height: "15%",
        marginTop: 30,
        justifyContent: "space-around"
    },
    account: {
        color: colors.textColor,
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Poppins-Regular",
    }
});

export { styles };