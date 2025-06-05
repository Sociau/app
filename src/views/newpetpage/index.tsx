import { TouchableOpacity, View, Image, ScrollView, Text, TextInput, Alert } from "react-native"
import { styles } from "./style";
import { NewPetNavigationProp } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/buttonComponent";
import { colors } from "../../../rootStyles";
import InputComponent from "../../components/inputComponent";
import SelectComponent from "../../components/selectComponent";
import { useEffect, useState } from "react";
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiCreatePet } from "../../services/apiRequests";

const NewPetPage = () => {
    const [size, setSize] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [age, setAge] = useState("");
    const [species, setSpecies] = useState("")
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [about, setAbout] = useState("");
    const [isCastred, setIsCastred] = useState(false);
    const [isVaccinated, setIsVaccinated] = useState(false);
    const [isDewormed, setIsDewormed] = useState(false);
    const [mainPhoto, setMainPhoto] = useState<any>(null);

    const [user_id, setUserId] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const user_id = await AsyncStorage.getItem("user_id");
                if (user_id) {
                    setUserId(parseInt(user_id));
                }

            } catch (error) {
                console.error("Erro ao buscar keys", error)
            }
        }

        getData();
    }, [])

    const genderData = ["M", "F"];
    const sizeData = ["P", "M", "G"];
    const cityData = ["Santa Luzia", "Patos", "Caicó"];
    const stateData = ["PB", "RN"];

    const navigation = useNavigation<NewPetNavigationProp>();

    const handleBack = () => {
        navigation.navigate("HomePage");
    }

    const handleCreate = async () => {
        const veterinaryCareArray = [];
        if (isVaccinated) veterinaryCareArray.push("Vacinado");
        if (isDewormed) veterinaryCareArray.push("Vermifugado");
        if (isCastred) veterinaryCareArray.push("Castrado");

        const formData = new FormData();

        formData.append("species", species);
        formData.append("breed", breed);
        formData.append("name", name);
        formData.append("adopted", "false");
        formData.append("size", size);
        formData.append("gender", gender);
        formData.append("age", age);
        formData.append("about", about);
        formData.append("temperament", JSON.stringify(["Calmo"]));
        formData.append("veterinary_care", JSON.stringify(veterinaryCareArray));
        formData.append("city", city);
        formData.append("state", state);
        formData.append("photos", JSON.stringify([]));
        formData.append("person_id", user_id);

        if (mainPhoto) {
            formData.append("main_photo", {
                uri: mainPhoto.uri,
                name: mainPhoto.fileName || "pet.jpg",
                type: mainPhoto.type || "image/jpeg",
            });
        }

        console.log(formData);

        try {
            const res = await apiCreatePet(formData);
            console.log("Pet criado:", res.data);
            navigation.navigate("HomePage");
        } catch (err) {
            Alert.alert("Erro", "Erro ao criar pet.");
        }
    };


    const images = {
        white_arrow: require(`../../../assets/icons/default_arrow.png`),
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
        <ScrollView style={{ backgroundColor: colors.baseColor }} contentContainerStyle={styles.main}>
            <TouchableOpacity onPress={() => handleBack()} style={styles.backArrow}>
                <Image source={images.white_arrow} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.header} onPress={async () => {
                await launchImageLibrary({ mediaType: "photo" }, (response) => {
                    if (response?.assets && response.assets.length > 0) {
                        setMainPhoto(response.assets[0]);
                    }
                });
            }}>
                <Image
                    source={mainPhoto ? { uri: mainPhoto.uri } : images.animal_header}
                    style={{ width: "90%", height: "100%", marginTop: 0, borderRadius: 10 }}
                />
            </TouchableOpacity>

            <View style={styles.formContainer}>
                <View style={styles.formLine}>
                    <View style={styles.fieldPlace}>
                        <Text style={styles.fieldLabel}>Nome</Text>
                        <View style={styles.fieldInputContainer}>
                            <InputComponent fontColor="#b3b3b3" OnChangeTextFunction={(text: string) => setName(text)} placeHolderTextColor={"#b3b3b3"} multiline={false} placeHolder="Nome" type={"text"} />
                        </View>

                    </View>

                    <View style={styles.fieldPlace}>
                        <Text style={styles.fieldLabel}>Raça</Text>
                        <View style={styles.fieldInputContainer}>
                            <InputComponent fontColor="#b3b3b3" OnChangeTextFunction={(text: string) => setBreed(text)} placeHolderTextColor={"#b3b3b3"} multiline={false} placeHolder="Raça" type={"text"} />
                        </View>

                    </View>
                </View>

                <View style={styles.formLine}>
                    <View style={styles.fieldPlace}>
                        <Text style={styles.fieldLabel}>Idade</Text>
                        <View style={styles.fieldInputContainer}>
                            <InputComponent fontColor="#b3b3b3" OnChangeTextFunction={(text: string) => setAge(text)} placeHolderTextColor={"#b3b3b3"} multiline={false} placeHolder="Idade" type={"text"} />
                        </View>

                    </View>

                    <View style={styles.fieldPlace}>
                        <Text style={styles.fieldLabel}>Espécie</Text>
                        <View style={styles.fieldInputContainer}>
                            <InputComponent fontColor="#b3b3b3" OnChangeTextFunction={(text: string) => setSpecies(text)} placeHolderTextColor={"#b3b3b3"} multiline={false} placeHolder="Espécie" type={"text"} />
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