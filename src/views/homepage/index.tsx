import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import SearchComponent from "../../components/searchComponent";
import FilterModal from "../../modals/filter";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../../types/navigation";
import PetComponent from "../../components/petComponent";
import { apiGetPets } from "../../services/apiRequests";

type Pet = {
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
const HomePage = () => {
    const navigation = useNavigation<HomeNavigationProp>()
    const [openModal, setOpenModal] = useState(false)
    const [pets, setPets] = useState<Pet[]>([])

    useEffect(() => {
        const getPets = async () => {
            try {
                const response = await apiGetPets()
                console.log(response)
                if (response && response.data && Array.isArray(response.data.pets)) {
                    setPets(response.data.pets)
                } else {
                    setPets([])
                }
            } catch (error) {
                console.error("Erro ao buscar pets", error)
                setPets([])
            }
        }

        getPets()
    }, [])


    const handleFilterModal = () => {
        setOpenModal(!openModal)
    }

    const goToPetPage = (petId: number) => {
        navigation.navigate("PetPage", { petId });
    }

    return (
        <View>
            <View style={{ ...styles.mainHome, opacity: openModal ? 0.5 : 1, alignItems: 'center' }}>
                <TopComponent navigation={navigation} />
                <SearchComponent handleFilterModal={handleFilterModal} />

                <ScrollView contentContainerStyle={styles.scrollInside} showsVerticalScrollIndicator={false}>
                    {pets.map((pet, index) => (
                        <PetComponent key={index} pet={pet} handleFunction={() => goToPetPage(pet.pet.id)} />
                    ))}
                </ScrollView>
                <BottomMenuComponent />
            </View>

            <FilterModal handleFilterModal={handleFilterModal} filterModalState={openModal} />
        </View>
    )
}

export default HomePage