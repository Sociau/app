import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import { useNavigation } from "@react-navigation/native";
import { ContactNavigationProp } from "../../types/navigation";
import InputComponent from "../../components/inputComponent";
import { colors } from "../../../rootStyles";
import ButtonComponent from "../../components/buttonComponent";


const ContactPage = () => {
    const navigation = useNavigation<ContactNavigationProp>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [cpf, setCpf] = useState("");
    const [message, setMessage] = useState("");

    const renderInput = (placeHolder: string, onChangeText: () => void) => {
        return (
            <View style={styles.fieldInputContainer}>
                <InputComponent placeHolderTextColor={colors.secondTextColor} fontColor={colors.secondTextColor} OnChangeTextFunction={onChangeText} placeHolder={placeHolder} type={"text"} multiline={false} />
            </View>
        )
    }
    return (

        <ScrollView contentContainerStyle={styles.mainContact} showsVerticalScrollIndicator={false}>
            <View style={styles.scrollInside}>
                <Text style={styles.title}>Fale conosco!</Text>
                <Text style={styles.description}>Como podemos te ajudar?</Text>
                <View style={styles.inputsContainer}>
                    {
                        renderInput("Nome Completo", () => { })
                    }

                    {
                        renderInput("E-mail", () => setEmail(email))
                    }

                    {
                        renderInput("Whatsapp", () => { })
                    }

                    {
                        renderInput("CPF / CNPJ", () => { })
                    }

                    <View style={{ ...styles.fieldPlace }}>
                        <View style={{ ...styles.fieldInputContainer, width: "100%" }}>
                            <TextInput
                                style={styles.fieldInputContainerAbout} placeholder={"Digite sua mensagem..."}
                                placeholderTextColor={colors.secondTextColor} multiline={true}
                                onChangeText={() => setMessage(message)} />
                        </View>

                    </View>

                    <ButtonComponent handleFunction={() => { }} buttonText={"Enviar"} bgColor={colors.mainColorDark} color={colors.textColor} width={80} height={59} />

                </View>
            </View>
            <BottomMenuComponent />
        </ScrollView>


    )
}

export default ContactPage;