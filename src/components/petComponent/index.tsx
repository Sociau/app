import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

type PetObject = {
    pet: {
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
}

const male = require("../../../assets/icons/male.png");
const female = require("../../../assets/icons/female.png");

const PetComponent = ({ pet, handleFunction }: { pet: PetObject, handleFunction: () => void }) => {

    return (
        <TouchableOpacity style={styles.PetCompContainer} onPress={() => handleFunction()}>
            <Image source={{ uri: pet.pet.main_photo }} style={styles.PetCompImage} />
            <View style={styles.PetCompNameContainer}>
                <Text style={styles.PetCompNameText}>{pet.pet.name}</Text>
                <Image source={pet.pet.gender === "M" ? male : female} style={styles.PetCompGender} />
            </View>
            <View style={styles.PetCompNameContainer}>
                <Text style={styles.PetCompBreed}>{pet.pet.breed}</Text>
                <Text style={styles.PetCompBreed}>{pet.pet.age}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default PetComponent