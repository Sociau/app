import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import { HelpNavigationProp } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/buttonComponent";
import { colors } from "../../../rootStyles";


const HelpPage = () => {
    const navigation = useNavigation<HelpNavigationProp>();


    const donateSquare = (price: number) => {
        return (
            <View style={styles.donateSquare}>
                <Text style={styles.donatePrice}>R${price}/mês</Text>
                <View style={styles.donateButton}>
                    <ButtonComponent handleFunction={() => { }} buttonText="Doar" bgColor={colors.mainColor} color={colors.textColor} width={50} height={50} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.mainHelp}>
            <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
            <Text style={styles.subtitle}>
                Toda grande mudança começa com um pequeno gesto. Seu apoio pode transformar vidas.
            </Text>

            {
                donateSquare(9)
            }

            {
                donateSquare(15)
            }


            {
                donateSquare(30)
            }
            <BottomMenuComponent />
        </View>
    )
}

export default HelpPage;