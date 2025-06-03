import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type TopComponentProps = {
    navigation: any
}
const TopComponent: React.FC<TopComponentProps> = ({ navigation }) => {
    const images = {
        notifications1: require('../../../assets/icons/notification1.png'),
        notifications2: require('../../../assets/icons/notification2.png'),
        profile: "https://classic.exame.com/wp-content/uploads/2024/12/RockyBalboa.jpg"
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
                <Image style={styles.profileImage} source={{ uri: images.profile }} />
                <View style={styles.profileText}>
                    <Text style={styles.hello}>Olá, Lucas</Text>
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