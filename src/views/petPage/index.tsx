import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style"
import { useNavigation } from "@react-navigation/native";
import { PetNavigationProp } from "../../types/navigation";
import ButtonComponent from "../../components/buttonComponent";
import { colors } from "../../../rootStyles";

const PetPage = () => {

    const navigation = useNavigation<PetNavigationProp>();

    const handleBack = () => {
        navigation.navigate("HomePage");
    }

    const images = {
        white_arrow: require(`../../../assets/icons/white_arrow.png`),
        animal_header: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg",
    }

    const pet = {
        "name": "Zeca",
        "age": "2 anos",
        "breed": "Vira-Lata",
        "gender": "M",
        "image": "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg",
        "city": "Santa Luzia",
        "state": "PB",
        "size": "M",
        "description": "Oi, galera! Encontrei esse cachorro super tranquilo e carinhoso na rua, e decidi ajudar. Ele é de porte médio, bem calmo e parece estar acostumado com pessoas. Está saudável, vacinado e já castrado. Não posso ficar com ele, mas queria muito encontrar uma família que dê o amor que ele merece.",
        "castrated": true,
        "vaccinated": true,
        "dewormed": true,
        "owner": {
            "name": "Lucas",
            "image": "https://classic.exame.com/wp-content/uploads/2024/12/RockyBalboa.jpg",
        }
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

    const petMedicalInfo = (title: string, is: boolean) => {
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
        <ScrollView contentContainerStyle={style.main}>
            <TouchableOpacity onPress={() => handleBack()} style={style.backArrow}>
                <Image source={images.white_arrow} />
            </TouchableOpacity>

            <TouchableOpacity style={style.header}>
                <Image source={{ uri: images.animal_header }} style={style.headerImage} />
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
                    <Text style={style.petSubtitle}>{pet.description}</Text>
                </View>

                <View style={style.petMedicalInfo}>
                    {
                        petMedicalInfo("Castrado", pet.castrated)
                    }

                    {
                        petMedicalInfo("Vermifurgado", pet.dewormed)
                    }

                    {
                        petMedicalInfo("Vacinado", pet.vaccinated)
                    }
                </View>


                <Text style={style.ownerTitle}>Tutor</Text>
                <View style={style.ownerBox}>
                    <View style={style.ownerInfo}>
                        <Image source={{ uri: pet.owner.image }} style={style.ownerImage} />
                        <Text style={style.ownerName}>{pet.owner.name}</Text>
                    </View>
                    <Text style={style.ownerText}>Ver Perfil</Text>
                </View>

                <ButtonComponent handleFunction={() => { }} buttonText="Adotar" bgColor={colors.mainColor} color={colors.textColor} width={100} height={60} />
            </View>
        </ScrollView>
    )
}

export default PetPage;