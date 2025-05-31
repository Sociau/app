import { Image, ScrollView, TouchableOpacity } from "react-native";
import { style } from "./style"
import { useNavigation } from "@react-navigation/native";
import { PetNavigationProp } from "../../types/navigation";

const PetPage = () => {

    const navigation = useNavigation<PetNavigationProp>();

    const handleBack = () => {
        navigation.navigate("HomePage");
    }

    const images = {
        white_arrow: require(`../../../assets/icons/white_arrow.png`),
        animal_header: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg",
    }

    return (
        <ScrollView contentContainerStyle={style.main}>
            <TouchableOpacity onPress={() => handleBack()} style={style.backArrow}>
                <Image source={images.white_arrow} />
            </TouchableOpacity>

            <TouchableOpacity style={style.header}>
                <Image source={{ uri: images.animal_header }} style={style.headerImage} />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default PetPage;