import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

type InputComponentProps = {
    isSecure?: boolean,
    type: any,
    multiline: boolean,
    placeHolder: string,
    placeHolderTextColor: string,
}
const InputComponent: React.FC<InputComponentProps> = ({ isSecure, type, multiline, placeHolder, placeHolderTextColor }) => {

    return (
        <TextInput
            style={styles.input} placeholder={placeHolder}
            placeholderTextColor={placeHolderTextColor} multiline={multiline}
            textContentType={type}
            secureTextEntry={isSecure} />
    )
}

export default InputComponent