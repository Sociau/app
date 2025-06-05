import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style"
import { useNavigation, useRoute } from "@react-navigation/native";
import { PetNavigationProp } from "../../types/navigation";
import ButtonComponent from "../../components/buttonComponent";
import { colors } from "../../../rootStyles";
import { useEffect, useState } from "react";
import { apiGetPetById, getUserById } from "../../services/apiRequests";
import AdoptModal from "../../modals/adoptModal";


type Pet = {
    "about": string,
    "adopted": boolean,
    "age": string,
    "breed": string,
    "city": string,
    "gender": string,
    "id": number,
    "main_photo": string,
    "name": string,
    "person_id": number,
    "size": string,
    "species": string,
    "state": string,
    "temperament": string,
    "veterinary_care": string
}

type User = {
    "address": {
        "city": string,
        "id": number,
        "neighborhood": string,
        "state": string,
        "street": string
    },
    "person": {
        "about_you": string,
        "address_id": number,
        "avatar": string,
        "email": string,
        "email_code": number,
        "id": number,
        "main_whatsapp": string,
        "name": string,
        "nickname": string,
        "second_whatsapp": string
    },
    "status": number
}

const PetPage = () => {
    const navigation = useNavigation<PetNavigationProp>();

    const route = useRoute()
    const { petId } = route.params as { petId: number }

    const [openAdoptModal, setOpenAdoptModal] = useState(false)
    const handleAdoptModal = () => {
        setOpenAdoptModal(!openAdoptModal)
    }

    const petBase = {
        "about": "",
        "adopted": false,
        "age": "",
        "breed": "",
        "city": "",
        "gender": "",
        "id": 0,
        "main_photo": "",
        "name": "",
        "person_id": 0,
        "size": "",
        "species": "",
        "state": "",
        "temperament": "",
        "veterinary_care": ""
    }

    const ownerBase = {
        "address": {
            "city": "",
            "id": 1,
            "neighborhood": "",
            "state": "",
            "street": ""
        },
        "person": {
            "about_you": "",
            "address_id": 1,
            "avatar": "",
            "email": "",
            "email_code": 1,
            "id": 1,
            "main_whatsapp": "",
            "name": "",
            "nickname": "",
            "second_whatsapp": ""
        },
        "status": 1
    }

    const [pet, setPet] = useState<Pet>(petBase)
    const [owner, setOwner] = useState<User>(ownerBase)

    useEffect(() => {
        const getPets = async () => {
            try {
                const response = await apiGetPetById(petId)
                console.log(response)
                if (response && response.data.pet) {
                    setPet(response.data.pet)
                    console.log("response.data.pet.person_id", response.data.pet.person_id)

                    const user = await getUserById(response.data.pet.person_id)
                    console.log(user)
                    if (user && user.data.person) {
                        setOwner(user.data)
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar pets", error)
                setPet(petBase)
            }
        }

        getPets()
    }, [])

    const handleBack = () => {
        navigation.navigate("HomePage");
    }

    const images = {
        white_arrow: require(`../../../assets/icons/default_arrow.png`),
        animal_header: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg",
    }

    const petSize = (size: string) => {
        switch (size) {
            case "P":
                return "Pequeno";

            case "M":
                return "Médio";
            case "G":
                return "Grande";
            default:
                return "";
        }
    }

    const petInfo = (title: string, subtitle: string) => {
        return (
            <View>
                <Text style={style.petName}>{title}</Text>
                <Text style={style.petSubtitle}>{subtitle}</Text>
            </View>
        )
    }

    const petMedicalInfo = (title: string, options: string) => {
        let cuidados = [];
        try {
            cuidados = JSON.parse(options);
            if (!Array.isArray(cuidados)) cuidados = [];
        } catch (e) {
            cuidados = [];
        }

        const is = cuidados.includes(title);

        return (
            <View style={style.petMedicalContainer}>
                <Text style={style.petSubtitle}>{title}</Text>
                <View style={style.petMedical}>
                    {
                        is ? <Text style={style.petName}>X</Text> : ""
                    }
                </View>
            </View>
        )
    }

    return (
        <>
            <ScrollView contentContainerStyle={style.main}>
                <TouchableOpacity onPress={() => handleBack()} style={style.backArrow}>
                    <Image source={images.white_arrow} />
                </TouchableOpacity>

                <TouchableOpacity style={style.header}>
                    <Image source={{ uri: pet.main_photo }} style={style.headerImage} />
                </TouchableOpacity>

                <View style={style.petContainer}>
                    <View style={style.petContainerInfo}>
                        {
                            petInfo(pet.name, pet.breed)
                        }

                        <View>
                            <Text style={style.petName}>{pet.city}</Text>
                            <Text style={{ ...style.petSubtitle, alignSelf: "flex-end", }}>{pet.state}</Text>
                        </View>
                    </View>

                    <View style={style.petContainerInfo}>
                        {
                            petInfo(pet.age, "Idade")
                        }

                        {
                            petInfo(pet.gender === "M" ? "Macho" : "Fêmea", "Sexo")
                        }

                        {
                            petInfo(petSize(pet.size), "Tamanho")
                        }
                    </View>

                    <View>
                        <Text style={style.petName}>Sobre</Text>
                        <Text style={style.petSubtitle}>{pet.about}</Text>
                    </View>

                    <View style={style.petMedicalInfo}>
                        {
                            petMedicalInfo("Castrado", pet.veterinary_care)
                        }

                        {
                            petMedicalInfo("Vermifurgado", pet.veterinary_care)
                        }

                        {
                            petMedicalInfo("Vacinado", pet.veterinary_care)
                        }
                    </View>


                    <Text style={style.ownerTitle}>Tutor</Text>
                    <View style={style.ownerBox}>
                        <View style={style.ownerInfo}>
                            <Image source={{ uri: owner.person.avatar }} style={style.ownerImage} />
                            <Text style={style.ownerName}>{owner.person.name}</Text>
                        </View>
                        <Text style={style.ownerText}>Ver Perfil</Text>
                    </View>

                    <ButtonComponent handleFunction={() => handleAdoptModal()} buttonText="Adotar" bgColor={colors.mainColor} color={colors.textColor} width={100} height={60} />
                </View>
            </ScrollView>

            {
                openAdoptModal && <AdoptModal handleAdoptModal={handleAdoptModal} adoptModalState={openAdoptModal} />
            }
        </>

    )
}

export default PetPage;