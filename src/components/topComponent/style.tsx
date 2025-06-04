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
        fontFamily: "Montserrat-Medium",
    },
    alert: {
        color: "#8F8F8F",
        fontSize: 10,
        fontFamily: "Montserrat-Medium",
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    notification: {
        width: 20,
        height: 20,
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
        width: 31,
        height: 31,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50

    }
})