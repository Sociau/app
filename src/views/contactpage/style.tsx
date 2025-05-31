import { StyleSheet } from "react-native"
import { colors } from "../../../rootStyles"

export const styles = StyleSheet.create({
    mainContact: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.baseColor,
    },
    scrollInside: {
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: "center",
        paddingBottom: 100,
    },
    title: {
        marginTop: 40,
        fontFamily: "Poppins-Bold",
        fontSize: 24,
        color: colors.secondTextColor
    },
    description: {
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        color: colors.secondTextColor
    },
    inputsContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    fieldInputContainer: { borderColor: colors.secondTextColor, borderWidth: 1, width: "80%", borderRadius: 8, marginTop: 20 },
    fieldInputContainerAbout: {
        width: "100%",
        height: 138,
        fontSize: 16,
        color: colors.secondTextColor,
        padding: 5,
        margin: 0,
        paddingLeft: 10,
        paddingBottom: 0,
        fontFamily: "Poppins-Regular",
        borderColor: colors.secondTextColor,
        borderRadius: 8,
        borderWidth: 1,
    },
    fieldPlace: {
        width: "80%",
        marginBottom: 40,
    },
})