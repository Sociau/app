import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../rootStyles";

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.textColor,
        borderRadius: 10,
        borderTopRightRadius: 0,
        fontFamily: "Poppins-Regular",
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.secondTextColor,
        fontFamily: "Poppins-Regular",
    },
});

export { styles };