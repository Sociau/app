import React from "react";
import { Image, ScrollView, View } from "react-native";
import { styles } from "./style";
import BottomMenuComponent from "../../components/bottomMenu";
import TopComponent from "../../components/topComponent";
import ContentComponent from "../../components/contentComponent";
import { useNavigation } from "@react-navigation/native";
import { AboutUsNavigationProp } from "../../types/navigation";
import { Text } from "react-native-gesture-handler";


const AboutUsPage = () => {
    const navigation = useNavigation<AboutUsNavigationProp>();
    return (
        <View>
            <ScrollView contentContainerStyle={styles.mainAboutUs}>
                <View style={styles.topAboutUs}>

                    <Text style={styles.titleAboutUs}>
                        Muito mais que um site de adoção,
                        <Text style={{ ...styles.titleAboutUs, color: "#f58d2d", }}> conectamos corações!</Text>
                    </Text>

                    <Text style={styles.textAboutUs}>
                        Somos uma ponte entre ONGs de adoção e pessoas que querem fazer a diferença.

                        <Text style={{ ...styles.textAboutUs, color: "#f58d2d", }}> Venha conectar corações e lares com a gente!</Text>
                    </Text>

                    <Image source={require("../../../assets/images/gato.png")} style={styles.imageAboutUs} />
                </View>

                <Image source={require("../../../assets/images/team.png")} style={styles.teamAboutUs} />

                <View style={styles.instagram}>
                    <View style={styles.instagramText}>
                        <Text style={styles.instagramTitle}>Conheça nosso Instagram!</Text>
                        <Text style={styles.instagramSubtitle}>@sociau_</Text>
                    </View>

                    <View>
                        <Image source={require("../../../assets/images/phone.png")} />
                    </View>
                </View>

            </ScrollView>
            <BottomMenuComponent />
        </View>

    )
}

export default AboutUsPage;