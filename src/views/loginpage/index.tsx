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
import { apiLogin } from "../../services/apiRequests";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {

    const navigation = useNavigation<LoginNavigationProp>();
    const [mostrarSenha, setMostrarSenha] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLoginApi = async () => {
        const userLogin = await apiLogin({
            email: email.trim(),
            password: password.trim()
        })

        if (userLogin?.data.status === 404) {
            console.log("Usuário não encontrado")
        }

        if (userLogin && userLogin.data.token && userLogin.data.status == 200) {
            const token = userLogin.data.token

            try {
                await AsyncStorage.setItem("token", token);
                await AsyncStorage.setItem("nickname", userLogin.data.person.nickname);
                await AsyncStorage.setItem("avatar", userLogin.data.person.avatar);
                await AsyncStorage.setItem("name", userLogin.data.person.name);
                await AsyncStorage.setItem("user_id", userLogin.data.person.id.toString());
            } catch (err) {
                console.log("Erro ao salvar no AsyncStorage:", err);
            }

            const storage = await AsyncStorage.getItem("user_id")

            navigation.navigate("HomePage")
        } else {
            navigation.navigate("FirstPage")
        }
    }

    const handleLogin = () => {
        navigation.navigate("HomePage")
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
                        <InputComponent OnChangeTextFunction={setEmail} placeHolder="Email" placeHolderTextColor={colors.textColor} multiline={false} type="emailAddress" />
                        <InputComponent OnChangeTextFunction={setPassword} placeHolder="Senha" placeHolderTextColor={colors.textColor} multiline={false} type="password" isSecure={mostrarSenha} />
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
                            handleFunction={handleLoginApi}
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