import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import SearchComponent from "../../components/searchComponent";
import FilterModal from "../../modals/filter";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../../types/navigation";


const HomePage = () => {
    const navigation = useNavigation<HomeNavigationProp>()
    const [openModal, setOpenModal] = useState(false)

    const handleFilterModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <View>
            <View style={{ ...styles.mainHome, opacity: openModal ? 0.5 : 1 }}>
                <TopComponent navigation={navigation} />
                <SearchComponent handleFilterModal={handleFilterModal} />
                <ContentComponent />
                <BottomMenuComponent />
            </View>

            <FilterModal handleFilterModal={handleFilterModal} filterModalState={openModal} />
        </View>
    )
}

export default HomePage