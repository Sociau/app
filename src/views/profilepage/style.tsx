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

    dataContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "65%",
        backgroundColor: colors.helloText,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    data: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "80%",
        alignItems: "center",
        justifyContent: "space-around",
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
    notification: {
        width: 29,
        height: 29,
    },
    notificationContainer: {
        backgroundColor: colors.grayColor,
        width: 46,
        height: 46,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        position: "absolute",
        right: 21,
        top: 39,
    },
    top: {
        width: "100%",
        height: "35%",
        alignItems: "center",
        justifyContent: "center",
    },
    profileImage: {
        width: 180,
        height: 180,
        borderRadius: 100,
    },
    edit: {
        position: "absolute",
        top: "67%",
        left: "60%",
        width: 28,
        height: 28,
    },
    menuOptions: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    menuOptionsText: {
        color: colors.textColor,
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },
    navegate: {
        color: colors.textColor,
        width: 10,
        height: 17,
    }
});

export { styles };