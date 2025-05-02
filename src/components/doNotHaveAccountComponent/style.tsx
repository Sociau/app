import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

const styles = StyleSheet.create({
    newAccount: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.textColor,
        fontFamily: "Poppins-Regular",
    },
    newAccountContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
});

export { styles };