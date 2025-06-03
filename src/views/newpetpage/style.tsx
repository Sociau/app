import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

const styles = StyleSheet.create({
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
        left: 48,
        top: 64,
        zIndex: 100,
    },
    header: {
        width: "90%",
        height: "25%",
        marginTop: "14%",
        alignItems: "center",
    },
    buttonsContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    formContainer: {
        width: "75%",
        alignItems: "center",
        marginBottom: 30,
    },
    formLine: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        marginTop: 0,
    },
    fieldPlace: {
        width: "48%",
        marginBottom: 10,
    },
    fieldLabel: {
        fontSize: 18,
        fontFamily: "Poppins-Bold",
    },
    fieldInputContainer: { borderColor: "#b3b3b3", borderWidth: 1, width: "90%", borderRadius: 8 },
    fieldInputContainerAbout: {
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
    fieldCheckBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    fieldCheckBoxText: {
        color: colors.helloText,
        fontSize: 10,
        fontFamily: "Poppins-Bold",
    },
    fieldCheckBoxContainer: {
        width: 16,
        height: 16,
        backgroundColor: colors.grayColor,
        borderRadius: 5
    },
    fieldCheckBoxChecked: {
        width: 16,
        height: 16,
        backgroundColor: "#2c2c2c",
        borderRadius: 5
    },
});

export { styles };