import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../rootStyles";

type InputComponentProps = {
    isSecure?: boolean,
    type: any,
    multiline: boolean,
    placeHolder: string,
    placeHolderTextColor: string,
    OnChangeTextFunction: () => void,
    fontColor?: string,

}
const InputComponent: React.FC<InputComponentProps> = ({ isSecure, type, multiline, placeHolder, placeHolderTextColor, OnChangeTextFunction, fontColor }) => {

    return (
        <TextInput
            style={{ ...styles.input, color: fontColor || colors.textColor }} placeholder={placeHolder}
            placeholderTextColor={placeHolderTextColor} multiline={multiline}
            textContentType={type}
            secureTextEntry={isSecure}
            onChangeText={() => OnChangeTextFunction()} />
    )
}

export default InputComponent