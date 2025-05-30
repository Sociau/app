import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

const styles = StyleSheet.create({
    loginMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: "100%",
        backgroundColor: colors.baseColor
    },

    cat: {
        width: "100%",
        height: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },

    catImage: {
        width: 228,
        height: 228,
    },

    dataContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "70%",
        backgroundColor: colors.mainColor,
        borderTopLeftRadius: 100,
        alignItems: "center",
    },
    data: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },

    loginText: {
        fontSize: 36,
        color: colors.textColor,
        marginTop: 20,
        fontFamily: "Poppins-Bold",
    },
    inputContainer: {
        display: "flex",
        width: "80%",
        height: 120,
        justifyContent: "space-between",
    },
    buttonsContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    forgetPassword: {
        fontSize: 20,
        color: colors.textColor,
        marginTop: 10,
        fontFamily: "Poppins-Bold",
    },
});

export { styles };