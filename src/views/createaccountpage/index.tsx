import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../rootStyles";
import { useNavigation } from "@react-navigation/native";
import { CreateAccountNavigationProp } from "../../types/navigation";
import InputComponent from "../../components/inputComponent";
import ButtonComponent from "../../components/buttonComponent";
import DatePickerComponent from "../../components/datePickerComponent";
import EyeIconComponent from "../../components/eyeIconComponent";

const CreateAccountPage = () => {
    const [mostrarSenha, setMostrarSenha] = useState(true);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(true);
    const [firstStep, setFirstStep] = useState(true);

    const getInput = (placeHolder: string, type: string, isSecure?: boolean) => {
        return <InputComponent
            OnChangeTextFunction={() => { }}
            placeHolder={placeHolder}
            type={type}
            isSecure={isSecure}
            placeHolderTextColor={colors.textColor}
            multiline={false}
        />;
    }

    const navigation = useNavigation<CreateAccountNavigationProp>();

    const handleSteps = () => {
        setFirstStep(!firstStep);
    }

    const handleBack = () => {
        if (!firstStep) {
            handleSteps();
        } else {
            navigation.navigate("LoginPage");
        }
    }

    const handleCreateAccount = () => {
        navigation.navigate("LoginPage");
    }

    const images = {
        black_arrow: require('../../../assets/icons/black_arrow.png'),
    }

    return (
        <View style={styles.createAccountMain}>


            <View style={styles.top}>
                <TouchableOpacity onPress={() => handleBack()} style={styles.backArrow}>
                    <Image source={images.black_arrow} />
                </TouchableOpacity>
                <Text style={styles.Title}>Cadastro</Text>
            </View>


            <View style={styles.dataContainer}>
                {
                    firstStep ? (
                        <View style={styles.data}>
                            <View style={styles.inputs}>
                                {getInput("Nome Completo", "text")}
                                {getInput("Email", "emailAddress")}
                                <EyeIconComponent
                                    handleFunction={setMostrarSenha}
                                    status={mostrarSenha}
                                    right={3}
                                    top={35}
                                    width={16}
                                    height={16}
                                />
                                {getInput("Senha", "password", mostrarSenha)}
                                <EyeIconComponent
                                    handleFunction={setMostrarConfirmarSenha}
                                    status={mostrarConfirmarSenha}
                                    right={3}
                                    top={49.5}
                                    width={16}
                                    height={16}
                                />
                                {getInput("Confirmar Senha", "password", mostrarConfirmarSenha)}
                                {getInput("CPF/CNPJ", "number")}

                                <DatePickerComponent />
                            </View>

                            <View style={styles.buttonContainer}>
                                <ButtonComponent width={100} height={53} handleFunction={() => handleSteps()} buttonText="Continuar" color={colors.textColor} bgColor={colors.mainColor} />
                                <TouchableOpacity onPress={() => handleCreateAccount()}>
                                    <Text style={styles.account}>Já tem uma conta? Entre!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.data}>
                            <View style={styles.inputs}>
                                {getInput("Cidade", "text")}
                                {getInput("Estado", "text")}
                                {getInput("Bairro", "text")}
                                {getInput("Rua", "text")}
                                {getInput("Número", "number")}
                                {getInput("Whatsapp", "number")}
                            </View>
                            <View style={styles.buttonContainer}>
                                <ButtonComponent width={100} height={53} handleFunction={() => handleCreateAccount()} buttonText="Salvar" color={colors.textColor} bgColor={colors.mainColor} />
                                <TouchableOpacity onPress={() => handleCreateAccount()}>
                                    <Text style={styles.account}>Já tem uma conta? Entre!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )

                }

            </View>
        </View>
    )
}

export default CreateAccountPage;