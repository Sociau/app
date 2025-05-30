import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";


const icon = {
    width: 36,
    height: 36
}

export const styles = StyleSheet.create({
    mainBottomMenu: {
        bottom: 40,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "10%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.mainColor,

    },
    bottomMenuContainer: {
        display: "flex",
        flexDirection: "row",
        width: "40%",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 0,
        height: 50
    },
    activeIcon: {
        ...icon,
    },
    desactiveIcon: {
        ...icon,
        opacity: 0.5,
    },
    pawContainer: {
        backgroundColor: colors.textColor,
        width: 79,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 73,
        borderRadius: 100,
        marginBottom: 75,
        boxShadow: "0px 3px 8px 1px rgba(0, 0, 0, 0.25)"
    },
    paw: {
        width: 44,
        height: 44
    }
})