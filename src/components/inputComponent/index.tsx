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
    OnChangeTextFunction: (text: string) => void,
    fontColor?: string,
    value?: any

}
const InputComponent: React.FC<InputComponentProps> = ({ value, isSecure, type, multiline, placeHolder, placeHolderTextColor, OnChangeTextFunction, fontColor }) => {

    return (
        <TextInput
            style={{ ...styles.input, color: fontColor || colors.textColor }} placeholder={placeHolder}
            placeholderTextColor={placeHolderTextColor} multiline={multiline}
            textContentType={type}
            secureTextEntry={isSecure}
            onChangeText={(text) => OnChangeTextFunction(text)}
            value={value} />
    )
}

export default InputComponent