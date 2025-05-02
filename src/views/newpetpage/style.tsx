import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: "100%",
        justifyContent: "space-between",
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
    buttonsContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: '10%'
    },
});

export { styles };