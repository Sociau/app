import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import { HelpNavigationProp } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";


const HelpPage = () => {
    const navigation = useNavigation<HelpNavigationProp>();
    return (
        <View style={styles.mainHelp}>
            <TopComponent navigation={navigation} />
            <ContentComponent />
            <BottomMenuComponent />
        </View>
    )
}

export default HelpPage;