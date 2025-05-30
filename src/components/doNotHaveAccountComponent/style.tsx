import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

const styles = StyleSheet.create({
    newAccount: {
        fontSize: 15,
        color: colors.textColor,
        fontFamily: "Poppins-Bold",
    },
    newAccountContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
});

export { styles };