import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import { useNavigation } from "@react-navigation/native";
import { AboutUsNavigationProp } from "../../types/navigation";


const AboutUsPage = () => {
    const navigation = useNavigation<AboutUsNavigationProp>();
    return (
        <View style={styles.mainAboutUs}>
            <TopComponent navigation={navigation} />
            <ContentComponent />
            <BottomMenuComponent />
        </View>
    )
}

export default AboutUsPage;