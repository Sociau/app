import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomMenuComponent = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const currentRoute = route.name || "Home";

    const handleClick = (pageReference: string) => {
        if (currentRoute !== pageReference) {
            navigation.navigate(pageReference as never);
        }
    }

    const images = {
        homeIcon: require('../../../assets/icons/home.png'),
        aboutUsIcon: require('../../../assets/icons/aboutus.png'),
        helpIcon: require('../../../assets/icons/help.png'),
        contactIcon: require('../../../assets/icons/contact.png'),
        pawIcon: require('../../../assets/icons/paw.png')
    }
    return (
        <View style={styles.mainBottomMenu}>
            <View style={styles.bottomMenuContainer}>
                <TouchableOpacity onPress={() => handleClick("HomePage")}>
                    <Image source={images.homeIcon} style={currentRoute === "HomePage" ? styles.activeIcon : styles.desactiveIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleClick("AboutUsPage")}>
                    <Image source={images.aboutUsIcon} style={currentRoute === "AboutUsPage" ? styles.activeIcon : styles.desactiveIcon} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.pawContainer} onPress={() => handleClick("NewPetPage")}>
                <Image source={images.pawIcon} style={styles.paw} />
            </TouchableOpacity>

            <View style={styles.bottomMenuContainer}>
                <TouchableOpacity onPress={() => handleClick("HelpPage")}>
                    <Image source={images.helpIcon} style={currentRoute === "HelpPage" ? styles.activeIcon : styles.desactiveIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleClick("ContactPage")}>
                    <Image source={images.contactIcon} style={currentRoute === "ContactPage" ? styles.activeIcon : styles.desactiveIcon} />
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default BottomMenuComponent;