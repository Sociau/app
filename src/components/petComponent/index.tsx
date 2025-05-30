import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

type PetObject = {
    name: string,
    age: string,
    breed: string,
    gender: string,
    image: string,
}

const male = require("../../../assets/icons/male.png");
const female = require("../../../assets/icons/female.png");

const PetComponent = ({ pet }: { pet: PetObject }) => {
    return (
        <TouchableOpacity style={styles.PetCompContainer}>
            <Image source={{ uri: pet.image }} style={styles.PetCompImage} />
            <View style={styles.PetCompNameContainer}>
                <Text style={styles.PetCompNameText}>{pet.name}</Text>
                <Image source={pet.gender === "M" ? male : female} style={styles.PetCompGender} />
            </View>
            <View style={styles.PetCompNameContainer}>
                <Text style={styles.PetCompBreed}>{pet.breed}</Text>
                <Text style={styles.PetCompBreed}>{pet.age}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default PetComponent