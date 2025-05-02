import React, { useEffect } from "react";
import { View, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FirstPageNavigationProp } from "../../types/navigation";

const FirstPage = () => {

    const navigation = useNavigation<FirstPageNavigationProp>();
    const image = require('../../../assets/images/logo_name.png');

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("LoginPage");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);


    return (
        <View style={styles.firstPageMain}>
            <StatusBar hidden={true} />
            <Image source={image} />
        </View>
    )
}

export default FirstPage;