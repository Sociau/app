import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";


type BackArrowComponentProps = {
    handleFunction: () => void;
    source: string;
}
const BackArrowComponent: React.FC<BackArrowComponentProps> = ({ handleFunction, source }) => {
    const images = {
        arrow: require(`../../../assets/icons/default_arrow.png`)
    }
    return (
        <TouchableOpacity onPress={() => handleFunction()} style={styles.backArrow}>
            <Image source={images.arrow} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backArrow: {
        position: "absolute",
        left: 21,
        top: 39,
    }
});

export default BackArrowComponent;