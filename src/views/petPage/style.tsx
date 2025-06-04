import { StyleSheet } from "react-native";
import { colors } from "../../../rootStyles";

export const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
        fontFamily: "Montserrat-Regular",
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

    headerImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    petContainer: {
        width: "90%",
    },
    petContainerInfo: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 10,
    },
    petName: {
        fontFamily: "Montserrat-Bold",
        fontSize: 20,

    },
    petSubtitle: {
        fontFamily: "Montserrat-Bold",
        fontWeight: "bold",
        fontSize: 10,
        color: colors.transparentColor
    },
    petMedicalInfo: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    petMedicalContainer: {
        width: "30%",
        alignItems: "center",
        marginTop: 20,
    },
    petMedical: {
        backgroundColor: colors.grayColor,
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: 5,
    },

    ownerTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 20,
        marginTop: 20,
    },
    ownerBox: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "space-between",
        backgroundColor: colors.grayColor,
        borderRadius: 10,
        borderTopRightRadius: 0,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    ownerInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    ownerImage: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    ownerName: {
        fontFamily: "Montserrat-Bold",
        fontSize: 10,
        marginLeft: 10,
        color: colors.transparentColor
    },
    ownerText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 10,
        color: colors.mainColor
    }
})