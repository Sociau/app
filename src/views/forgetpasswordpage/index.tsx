import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { colors } from "../../../rootStyles";
import { useNavigation } from "@react-navigation/native";
import { ForgetPasswordNavigationProp } from "../../types/navigation";
import ButtonComponent from "../../components/buttonComponent";
import DonotHaveAccountComponent from "../../components/doNotHaveAccountComponent";
import InputComponent from "../../components/inputComponent";

const ForgetPasswordPage = () => {

    const navigation = useNavigation<ForgetPasswordNavigationProp>();

    const handleBack = () => {
        navigation.navigate("LoginPage");
    }


    const handleSend = () => {
        console.log("Enviar");
    }

    const handleCreateAccount = () => {
        navigation.navigate("CreateAccountPage");
    }

    const images = {
        cat: require('../../../assets/images/main_cat.png'),
        arrow: require(`../../../assets/icons/default_arrow.png`)
    }

    return (
        <View style={styles.loginMain}>
            <TouchableOpacity onPress={() => handleBack()} style={styles.backArrow}>
                <Image source={images.arrow} />
            </TouchableOpacity>
            <View style={styles.cat}>
                <Image style={styles.catImage} source={images.cat} />
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <Text style={styles.mainText}>Esqueci minha senha</Text>

                    <View style={styles.inputContainer}>
                        <InputComponent OnChangeTextFunction={() => { }} placeHolder="Email" placeHolderTextColor={colors.textColor} multiline={false} type="emailAddress" />
                    </View>

                    <ButtonComponent
                        handleFunction={handleSend}
                        buttonText="Enviar"
                        bgColor={colors.textColor}
                        color={colors.helloText}
                        width={80}
                        height={53} />
                    <DonotHaveAccountComponent handleCreateAccount={handleCreateAccount} />
                </View>

            </View>
        </View>
    )
}

export default ForgetPasswordPage;