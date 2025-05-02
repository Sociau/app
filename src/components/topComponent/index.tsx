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
        profile: require('../../../assets/icons/profile.png')
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
                <Image style={styles.profileImage} source={images.profile} />
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