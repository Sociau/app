import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

export const styles = StyleSheet.create({
    postContainer: {
        width: "90%",
        alignItems: "center",
        borderColor: colors.transparentColor,
        borderTopWidth: 1,
        paddingTop: 10,
        marginTop: 10,
    },
    userInfo: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userInfoContainer: {
        width: "80%",
        flexDirection: "row",
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    userInfoText: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 10,
    },
    userName: {
        fontFamily: "Montserrat-Bold",
        fontSize: 13,
        color: colors.secondTextColor
    },
    userTime: {
        fontFamily: "Montserrat-Bold",
        fontSize: 8,
        color: colors.transparentColor
    },
    dotsContainer: {
        flexDirection: "row",
    },
    dots: {
        width: 5,
        marginLeft: 2,
        height: 5,
        borderRadius: 50,
        backgroundColor: colors.secondTextColor
    },
    postImage: {
        width: "100%",
        height: 200,
        marginTop: 20,
        borderRadius: 5,
    },
    postText: {
        marginTop: 10,
        fontFamily: "Montserrat-Medium",
        fontSize: 10,
        color: colors.secondTextColor
    },
    postFooter: {
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    postFooterField: {
        flexDirection: "row",
        alignItems: "center",
    },
    postFooterText: {
        fontFamily: "Montserrat-Medium",
        fontSize: 10,
        marginLeft: 5,
        color: colors.secondTextColor
    }
})