import { TouchableOpacity, View, Image } from "react-native"
import { styles } from "./style";
import { NewPetsNavigationProp } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/buttonComponent";
import { colors } from "../../../rootStyles";

const NewPetPage = () => {
    const navigation = useNavigation<NewPetsNavigationProp>();

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
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => handleBack()} style={styles.backArrow}>
                <Image source={images.white_arrow} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.header}>
                <Image source={images.animal_header} />
            </TouchableOpacity>

            <View style={styles.buttonsContainer}>
                <ButtonComponent
                    handleFunction={handleCreate}
                    buttonText="Salvar"
                    bgColor={colors.mainColor}
                    color={colors.textColor}
                    width={85}
                    height={53} />
            </View>
        </View>
    )
}

export default NewPetPage;