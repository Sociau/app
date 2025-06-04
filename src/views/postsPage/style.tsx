import { StyleSheet } from "react-native"
import { colors } from "../../../rootStyles"

export const styles = StyleSheet.create({
    mainAboutUs: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: colors.baseColor,
    },

    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: colors.baseColor,
        alignItems: "center",
        paddingBottom: 130,
    },
    topAboutUs: {
        height: 270,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondTextColor,
    },
    titleAboutUs: {
        width: "80%",
        fontSize: 16,
        color: colors.textColor,
        fontFamily: "Poppins-Bold",
    },
    textAboutUs: {
        width: "80%",
        fontSize: 12,
        color: colors.textColor,
        fontFamily: "Poppins-Bold",
    },
    imageAboutUs: {
        position: "absolute",
        top: 180,
        right: 0,
    },
    teamAboutUs: {
        width: "80%",
        marginTop: 100,
        borderRadius: 10,
    },
    instagram: {
        width: "80%",
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
    },
    instagramText: {
        width: "40%",
    },
    instagramTitle: {
        fontSize: 20,
        fontFamily: "Poppins-Bold",
    },
    instagramSubtitle: {
        fontSize: 13,
        fontFamily: "Poppins-Bold",
    }
})