import { TouchableOpacity, View, Image, ScrollView, Text, TextInput } from "react-native"
import { styles } from "./style";
import { NewPetNavigationProp } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/buttonComponent";
import { colors } from "../../../rootStyles";
import InputComponent from "../../components/inputComponent";
import SelectComponent from "../../components/selectComponent";
import { useState } from "react";

const NewPetPage = () => {
    const [size, setSize] = useState("M");
    const [gender, setGender] = useState("M");
    const [city, setCity] = useState("Santa Luzia");
    const [state, setState] = useState("PB");

    const [isCastred, setIsCastred] = useState(false);
    const [isVaccinated, setIsVaccinated] = useState(false);
    const [isDewormed, setIsDewormed] = useState(false);

    const genderData = ["M", "F"];
    const sizeData = ["P", "M", "G"];
    const cityData = ["Santa Luzia", "Patos", "Caicó"];
    const stateData = ["PB", "RN"];

    const navigation = useNavigation<NewPetNavigationProp>();

    const handleBack = () => {
        navigation.navigate("HomePage");
    }

    const handleCreate = () => {
        navigation.navigate("HomePage");
    }

    const images = {
        white_arrow: require(`../../../assets/icons/white_arrow.png`),
        animal_header: require("../../../assets/images/animal_header.png"),
    }

    const renderSelectField = (label: string, data: string[], onValueChange: (value: string) => void, selectedValue: string) => {
        return (
            <View style={styles.fieldPlace}>
                <Text style={styles.fieldLabel}>{label}</Text>
                <View style={styles.fieldInputContainer}>
                    <SelectComponent data={data} onValueChange={onValueChange} selectedValue={selectedValue} />
                </View>

            </View>
        )
    }

    const checkBox = (onValueChange: (value: boolean) => void, selectedValue: boolean) => onValueChange(!selectedValue);

    const renderCheckBoxField = (label: string, checkBoxAction: (onValueChange: (value: boolean) => void, value: boolean) => void, selectedValue: boolean, onValueChange: (value: boolean) => void) => {
        return (
            <View style={styles.fieldCheckBox}>
                <Text style={styles.fieldCheckBoxText}>{label}</Text>
                <TouchableOpacity style={styles.fieldCheckBoxContainer} onPress={() => checkBoxAction(onValueChange, selectedValue)} >
                    <View style={selectedValue ? styles.fieldCheckBoxChecked : styles.fieldCheckBoxContainer}></View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ScrollView contentContainerStyle={styles.main}>
            <TouchableOpacity onPress={() => handleBack()} style={styles.backArrow}>
                <Image source={images.white_arrow} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.header}>
                <Image source={images.animal_header} />
            </TouchableOpacity>

            <View style={styles.formContainer}>
                <View style={styles.formLine}>
                    <View style={styles.fieldPlace}>
                        <Text style={styles.fieldLabel}>Nome</Text>
                        <View style={styles.fieldInputContainer}>
                            <InputComponent fontColor="#b3b3b3" OnChangeTextFunction={() => { }} placeHolderTextColor={"#b3b3b3"} multiline={false} placeHolder="Nome" type={"text"} />
                        </View>

                    </View>

                    <View style={styles.fieldPlace}>
                        <Text style={styles.fieldLabel}>Raça</Text>
                        <View style={styles.fieldInputContainer}>
                            <InputComponent fontColor="#b3b3b3" OnChangeTextFunction={() => { }} placeHolderTextColor={"#b3b3b3"} multiline={false} placeHolder="Raça" type={"text"} />
                        </View>

                    </View>
                </View>

                <View style={styles.formLine}>
                    {
                        renderSelectField("Tamanho", sizeData, setSize, size)
                    }
                    {
                        renderSelectField("Sexo", genderData, setGender, gender)
                    }
                </View>

                <View style={styles.formLine}>
                    {
                        renderSelectField("Estado", stateData, setState, state)
                    }
                    {
                        renderSelectField("Cidade", cityData, setCity, city)
                    }
                </View>

                <View style={{ ...styles.fieldPlace, width: "100%" }}>
                    <Text style={styles.fieldLabel}>Sobre</Text>
                    <View style={{ ...styles.fieldInputContainer, width: "95%" }}>
                        <TextInput
                            style={styles.fieldInputContainerAbout} placeholder={"Sobre o animal"}
                            placeholderTextColor={"#b3b3b3"} multiline={true}
                            onChangeText={() => { }} />
                    </View>

                </View>

                <View style={{ ...styles.fieldPlace, width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                        {
                            renderCheckBoxField("Castrado", checkBox, isCastred, setIsCastred)
                        }
                        {
                            renderCheckBoxField("Vermifugado", checkBox, isDewormed, setIsDewormed)
                        }
                        {
                            renderCheckBoxField("Vacinado", checkBox, isVaccinated, setIsVaccinated)
                        }
                    </View>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
                <ButtonComponent
                    handleFunction={handleCreate}
                    buttonText="Salvar"
                    bgColor={colors.mainColor}
                    color={colors.textColor}
                    width={85}
                    height={53} />
            </View>
        </ScrollView>
    )
}

export default NewPetPage;