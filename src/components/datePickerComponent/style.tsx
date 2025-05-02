import { StyleSheet } from 'react-native';
import { colors } from '../../../rootStyles';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        width: "100%",
    },
    label: {
        color: 'white',
        marginBottom: 5,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: "Poppins-Regular",
    },
    row: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    pickerWraper: {
        borderRadius: 10,
        height: 50,
        overflow: "hidden",
        justifyContent: "center",
        backgroundColor: 'white',
        alignItems: "center",
        width: 85,
    },
    picker: {
        color: colors.helloText,
        height: 50,
        width: 100,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    }
});