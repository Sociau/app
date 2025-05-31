import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

export const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
        fontFamily: "Poppins-Regular",
        backgroundColor: colors.baseColor
    },
    backArrow: {
        position: "absolute",
        left: 34,
        top: 64,
        zIndex: 100,
    },
    header: {
        width: "90%",
        height: "25%",
        marginTop: "14%",
        alignItems: "center",
    },

    headerImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    }
})