import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TopComponentProps = {
    navigation: any
}
const TopComponent: React.FC<TopComponentProps> = ({ navigation }) => {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {

                const name = await AsyncStorage.getItem("name");
                const avatar = await AsyncStorage.getItem("avatar");
                if (name) {
                    setName(name);
                }

                if (avatar) {
                    setAvatar(avatar);
                }
            } catch (error) {
                console.error("Erro ao buscar keys", error)
            }
        }

        getData();
    }, [])
    const images = {
        notifications1: require('../../../assets/icons/notification1.png'),
        notifications2: require('../../../assets/icons/notification2.png'),
    }

    const [turnNotifications, setTurnNotifications] = useState(false);

    const handleNavigation = () => {
        navigation.navigate('ProfilePage')
    }



    const handleNotification = () => {
        setTurnNotifications(!turnNotifications);
    }
    return (
        <View style={styles.top}>
            <TouchableOpacity style={styles.profile} onPress={() => handleNavigation()}>
                <Image style={styles.profileImage} source={{ uri: avatar }} />
                <View style={styles.profileText}>
                    <Text style={styles.hello}>{name}</Text>
                    <Text style={styles.alert}>Ver Perfil</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notificationContainer} onPress={() => handleNotification()}>
                <Image style={styles.notification} source={turnNotifications ? images.notifications2 : images.notifications1} />
            </TouchableOpacity>

        </View>
    )
}

export default TopComponent;