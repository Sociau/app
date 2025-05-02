import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";


type ButtonComponentProps = {
    handleFunction: () => void,
    buttonText: string,
    color: string,
    bgColor: string,
    width: number,
    height: number,
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ handleFunction, buttonText, bgColor, color, width, height }) => {
    return (
        <TouchableOpacity style={{ ...styles.button, backgroundColor: bgColor, width: `${width}%`, height: height }} onPress={handleFunction}>
            <Text style={{ ...styles.buttonText, color: color }}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

export default ButtonComponent;
