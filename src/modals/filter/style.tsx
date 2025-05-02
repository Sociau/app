import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

export const styles = StyleSheet.create({
    containerFilter: {
        width: "100%",
        height: "75%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        alignItems: "center",
        backgroundColor: colors.baseColor,
        justifyContent: "space-between",
        bottom: 0,
        zIndex: 100,
        padding: 0,
    },
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
    mainText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingTop: 20
    },
    close: {
        position: "absolute",
        backgroundColor: colors.mainColor,
        width: 35,
        height: 35,
        top: 20,
        left: 30,
        zIndex: 101,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    closeText: {
        fontWeight: "bold",
        fontFamily: "Poppins-Regular",
        fontSize: 24,
        color: colors.textColor,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "85%",
        alignSelf: "center",
        marginBottom: 20
    }
})