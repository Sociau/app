import { StyleSheet } from "react-native"
import { colors } from "../../../rootStyles"

export const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: 47,
    },
    hello: {
        color: colors.helloText,
        fontSize: 20,
        fontFamily: "Poppins-Bold",
    },
    alert: {
        color: "#8F8F8F",
        fontSize: 10,
        fontFamily: "Poppins-Bold",
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    notification: {
        width: 29,
        height: 29,
    },
    profileImage: {
        width: 66,
        height: 65,
        borderRadius: 50
    },
    profileText: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 10,
    },
    notificationContainer: {
        backgroundColor: colors.grayColor,
        width: 46,
        height: 46,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50

    }
})