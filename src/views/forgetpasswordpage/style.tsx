import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../rootStyles";

const styles = StyleSheet.create({
    loginMain: {
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

    cat: {
        width: "100%",
        height: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },

    catImage: {
        width: 228,
        height: 228,
    },

    dataContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "70%",
        backgroundColor: colors.mainColor,
        borderTopLeftRadius: 100,
        alignItems: "center",
    },
    data: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },

    mainText: {
        width: "60%",
        textAlign: "center",
        fontSize: 36,
        color: colors.textColor,
        marginTop: 20,
        fontWeight: "bold",
        fontFamily: "Poppins-Regular",
    },
    inputContainer: {
        display: "flex",
        width: "80%",
    },
    buttonsContainer: {
        display: "flex",
        width: "80%",
        flexDirection: "column",
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.textColor,
        borderRadius: 10,
        borderTopRightRadius: 0,
        fontFamily: "Poppins-Regular",
    },
    loginButtonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.secondTextColor,
        fontFamily: "Poppins-Regular",
    },
    forgetPassword: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.textColor,
        marginTop: 10,
        fontFamily: "Poppins-Regular",
    },
    newAccount: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.textColor,
        fontFamily: "Poppins-Regular",
    },
    newAccountContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    backArrow: {
        position: "absolute",
        left: 21,
        top: 39,
    }
});

export { styles };