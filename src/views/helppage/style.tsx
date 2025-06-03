import { StyleSheet } from "react-native"
import { colors } from "../../../rootStyles"

export const styles = StyleSheet.create({
    mainHelp: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        width: "100%",
        height: "100%",
        backgroundColor: colors.secondTextColor,
    },
    logo: {
        width: "90%",
        marginTop: 60,
    },
    subtitle: {
        color: colors.textColor,
        marginTop: 20,
        fontSize: 15,
        width: "70%",
        textAlign: "center",
    },
    donateSquare: {
        width: 250,
        backgroundColor: colors.textColor,
        height: 80,
        marginTop: 50,
        borderRadius: 10,
        alignItems: "center",
    },
    donatePrice: {
        fontSize: 24,
        fontFamily: "Poppins-Bold",
    },
    donateButton: {
        width: "100%",
        top: 50,
        position: "absolute",
        alignItems: "center"
    }
})