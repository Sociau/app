import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import SearchComponent from "../../components/searchComponent";
import FilterModal from "../../modals/filter";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../../types/navigation";
import PetComponent from "../../components/petComponent";


const HomePage = () => {
    const navigation = useNavigation<HomeNavigationProp>()
    const [openModal, setOpenModal] = useState(false)

    const pets = [
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "M",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "M",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "F",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "M",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "M",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "F",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "M",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "M",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
        {
            name: "Zeca",
            age: "2 anos",
            breed: "Vira-Lata",
            gender: "F",
            image: "https://i0.statig.com.br/bancodeimagens/78/pt/gs/78ptgsfeddfh638dkkzya5p3y.jpg"
        },
    ]

    const handleFilterModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <View>
            <View style={{ ...styles.mainHome, opacity: openModal ? 0.5 : 1, alignItems: 'center' }}>
                <TopComponent navigation={navigation} />
                <SearchComponent handleFilterModal={handleFilterModal} />

                <ScrollView contentContainerStyle={styles.scrollInside} showsVerticalScrollIndicator={false}>
                    {pets.map((pet, index) => (
                        <PetComponent key={index} pet={pet} />
                    ))}
                </ScrollView>
                <BottomMenuComponent />
            </View>

            <FilterModal handleFilterModal={handleFilterModal} filterModalState={openModal} />
        </View>
    )
}

export default HomePage