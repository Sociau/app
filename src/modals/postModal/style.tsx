import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

export const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        width: 214,
        height: 154,
        backgroundColor: colors.baseColor,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    modalOption: {
        width: "100%",
        height: 51,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.transparentColor
    },
    modalOptionText: {
        fontSize: 12,
        fontFamily: "Montserrat-Medium",
        color: colors.helloText
    }
})