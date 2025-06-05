import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../rootStyles";
import { useNavigation } from "@react-navigation/native";
import { CreateAccountNavigationProp } from "../../types/navigation";
import InputComponent from "../../components/inputComponent";
import ButtonComponent from "../../components/buttonComponent";
import DatePickerComponent from "../../components/datePickerComponent";
import EyeIconComponent from "../../components/eyeIconComponent";
import { apiCreateAccount } from "../../services/apiRequests";

const CreateAccountPage = () => {
    const navigation = useNavigation<CreateAccountNavigationProp>();

    const [mostrarSenha, setMostrarSenha] = useState(true);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(true);
    const [firstStep, setFirstStep] = useState(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        cpf_cnpj: "",
        main_whatsapp: "",
        second_whatsapp: "",
        about_you: "",
        nickname: "",
        city: "",
        state: "",
        neighborhood: "",
        street: "",
        number: "",
        complement: "",
        zip_code: "",
        avatar: null as any,
    });

    const handleInput = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const getInput = (placeHolder: string, key: string, type: string, isSecure?: boolean) => (
        <InputComponent
            placeHolder={placeHolder}
            type={type}
            isSecure={isSecure}
            placeHolderTextColor={colors.textColor}
            OnChangeTextFunction={(text: string) => handleInput(key, text)}
            multiline={false}
            value={form[key as keyof typeof form]}
        />
    );

    const handleSteps = () => {
        setFirstStep(!firstStep);
    };

    const handleBack = () => {
        if (!firstStep) {
            handleSteps();
        } else {
            navigation.navigate("LoginPage");
        }
    };

    const handleCreateAccount = async () => {
        if (form.password !== form.confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        const formData = new FormData();
        formData.append("name", form.name || "");
        formData.append("email", form.email || "");
        formData.append("password", form.password || "");
        formData.append("main_whatsapp", form.main_whatsapp || "");
        formData.append("second_whatsapp", form.second_whatsapp || "");
        formData.append("about_you", form.about_you || "");
        formData.append("nickname", form.nickname || "");
        formData.append("state", form.state || "");
        formData.append("city", form.city || "");
        formData.append("street", form.street || "");
        formData.append("number", form.number || "");
        formData.append("complement", form.complement || "");
        formData.append("neighborhood", form.neighborhood || "");
        formData.append("zip_code", form.zip_code || "");

        if (form.avatar) {
            formData.append("avatar", {
                uri: form.avatar.uri,
                name: "avatar.jpg",
                type: "image/jpeg",
            } as any);
        }

        try {
            const response = await apiCreateAccount(formData);
            if (response?.status === 200) {
                Alert.alert("Conta criada com sucesso!");
                navigation.navigate("LoginPage");
            } else {
                Alert.alert("Erro", "Erro ao criar a conta.");
            }
        } catch (err) {
            console.error("Erro na criação:", err);
            Alert.alert("Erro", "Erro ao criar a conta.");
        }
    };

    const images = {
        black_arrow: require("../../../assets/icons/black_arrow.png"),
    };

    return (
        <View style={styles.createAccountMain}>
            <View style={styles.top}>
                <TouchableOpacity onPress={handleBack} style={styles.backArrow}>
                    <Image source={images.black_arrow} />
                </TouchableOpacity>
                <Text style={styles.Title}>Cadastro</Text>
            </View>

            <View style={styles.dataContainer}>
                {firstStep ? (
                    <View style={styles.data}>
                        <View style={styles.inputs}>
                            {getInput("Nome Completo", "name", "text")}
                            {getInput("Email", "email", "emailAddress")}
                            <EyeIconComponent handleFunction={setMostrarSenha} status={mostrarSenha} right={3} top={35} width={16} height={16} />
                            {getInput("Senha", "password", "password", mostrarSenha)}
                            <EyeIconComponent handleFunction={setMostrarConfirmarSenha} status={mostrarConfirmarSenha} right={3} top={49.5} width={16} height={16} />
                            {getInput("Confirmar Senha", "confirmPassword", "password", mostrarConfirmarSenha)}
                            {getInput("CPF/CNPJ", "cpf_cnpj", "number")}
                            <DatePickerComponent />
                        </View>

                        <View style={styles.buttonContainer}>
                            <ButtonComponent width={100} height={53} handleFunction={handleSteps} buttonText="Continuar" color={colors.textColor} bgColor={colors.mainColor} />
                            <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
                                <Text style={styles.account}>Já tem uma conta? Entre!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View style={styles.data}>
                        <View style={styles.inputs}>
                            {getInput("Cidade", "city", "text")}
                            {getInput("Estado", "state", "text")}
                            {getInput("Bairro", "neighborhood", "text")}
                            {getInput("Rua", "street", "text")}
                            {getInput("Número", "number", "number")}
                            {getInput("Whatsapp", "main_whatsapp", "number")}

                        </View>

                        <View style={styles.buttonContainer}>
                            <ButtonComponent width={100} height={53} handleFunction={handleCreateAccount} buttonText="Salvar" color={colors.textColor} bgColor={colors.mainColor} />
                            <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
                                <Text style={styles.account}>Já tem uma conta? Entre!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
};

export default CreateAccountPage;