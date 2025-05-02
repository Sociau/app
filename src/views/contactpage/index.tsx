import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import { useNavigation } from "@react-navigation/native";
import { ContactNavigationProp } from "../../types/navigation";


const ContactPage = () => {
    const navigation = useNavigation<ContactNavigationProp>();
    return (
        <View style={styles.mainContact}>
            <TopComponent navigation={navigation} />
            <ContentComponent />
            <BottomMenuComponent />
        </View>
    )
}

export default ContactPage;