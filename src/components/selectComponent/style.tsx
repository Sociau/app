import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

export const styles = StyleSheet.create({
    pickerWraper: {
        borderRadius: 10,
        height: 40,
        overflow: "hidden",
        justifyContent: "center",
        backgroundColor: 'white',
        alignItems: "center",
        width: "100%",

    },
    picker: {
        color: "#b3b3b3",
        height: 50,
        width: "100%",
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
})