import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 40,
        fontSize: 16,
        color: colors.textColor,
        padding: 5,
        margin: 0,
        paddingLeft: 10,
        paddingBottom: 0,
        fontFamily: "Poppins-Regular",
        borderColor: colors.textColor,
        borderRadius: 8,
        borderWidth: 1,
    },
});

export { styles };