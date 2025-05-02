import { StyleSheet } from "react-native"
import { colors } from "../../../rootStyles"

export const styles = StyleSheet.create({
    search: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    searchInput: {
        width: "75%",
        height: 44,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 80,
        backgroundColor: colors.grayColor,
        color: colors.helloText,
        marginRight: "2%",
        fontSize: 18,
        paddingLeft: "11%",
        paddingRight: "8%",
    },
    filter: {
        width: 52,
        height: 44,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: colors.mainColor,
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
})