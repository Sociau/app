import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

export const styles = StyleSheet.create({
    PetCompContainer: {
        width: "47%",
        minHeight: 165,
        backgroundColor: colors.grayColor,
        margin: 5,
        borderRadius: 10,
        alignItems: "center",
    },
    PetCompImage: {
        width: "100%",
        minHeight: 124,
        borderRadius: 10,
    },
    PetCompNameContainer: {
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

    },
    PetCompNameText: {
        fontSize: 12,
        fontFamily: "Poppins-Bold",
        color: colors.secondTextColor,
        marginTop: 5,
    },
    PetCompGender: {
        width: 14,
        height: 14,
    },
    PetCompBreed: {
        fontSize: 8,
        fontFamily: "Montserrat-Bold",
        color: colors.secondTextColor,
    }
})