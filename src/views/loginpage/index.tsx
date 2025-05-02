import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../rootStyles";
import { useNavigation } from "@react-navigation/native";
import { LoginNavigationProp } from "../../types/navigation";
import ButtonComponent from "../../components/buttonComponent";
import DonotHaveAccountComponent from "../../components/doNotHaveAccountComponent";
import InputComponent from "../../components/inputComponent";
import EyeIconComponent from "../../components/eyeIconComponent";

const LoginPage = () => {

    const navigation = useNavigation<LoginNavigationProp>();
    const [mostrarSenha, setMostrarSenha] = useState(true);


    const handleLogin = () => {
        navigation.navigate("HomePage");
    }

    const handleForgetPassword = () => {
        navigation.navigate("ForgetPasswordPage");
    }

    const handleCreateAccount = () => {
        navigation.navigate("CreateAccountPage");
    }

    const images = {
        cat: require('../../../assets/images/main_cat.png')
    }

    return (
        <View style={styles.loginMain}>
            <View style={styles.cat}>
                <Image style={styles.catImage} source={images.cat} />
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <Text style={styles.loginText}>Login</Text>

                    <View style={styles.inputContainer}>
                        <InputComponent placeHolder="Email" placeHolderTextColor={colors.textColor} multiline={false} type="emailAddress" />
                        <InputComponent placeHolder="Senha" placeHolderTextColor={colors.textColor} multiline={false} type="password" isSecure={mostrarSenha} />
                        <EyeIconComponent
                            handleFunction={setMostrarSenha}
                            status={mostrarSenha}
                            right={3}
                            top={77}
                            width={16}
                            height={16}
                        />
                    </View>

                    <View style={styles.buttonsContainer}>
                        <ButtonComponent
                            handleFunction={handleLogin}
                            buttonText="Entrar"
                            bgColor={colors.textColor}
                            color={colors.helloText}
                            width={80}
                            height={53} />
                        <Text style={styles.forgetPassword} onPress={() => handleForgetPassword()}>Esqueceu a senha?</Text>
                    </View>

                    <DonotHaveAccountComponent handleCreateAccount={handleCreateAccount} />
                </View>

            </View>
        </View>
    )
}

export default LoginPage;