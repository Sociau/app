
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ProfileNavigationProp } from "../../types/navigation";
import { useEffect, useState } from "react";
import { apiLogout } from "../../services/apiRequests";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfilePage = () => {
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
    const navigation = useNavigation<ProfileNavigationProp>();
    const handleBack = () => {
        navigation.navigate("HomePage");
    }

    const images = {
        notifications1: require('../../../assets/icons/notification1.png'),
        notifications2: require('../../../assets/icons/notification2.png'),
        profile: "https://classic.exame.com/wp-content/uploads/2024/12/RockyBalboa.jpg",
        nav: require('../../../assets/icons/nav.png'),
        edit: require("../../../assets/icons/edit.png"),
        black_arrow: require('../../../assets/icons/black_arrow.png'),
    }

    const [turnNotifications, setTurnNotifications] = useState(false);

    const handleNotification = () => {
        setTurnNotifications(!turnNotifications);
    }

    const handleAction = (goTo: any, text: string) => {
        if (text === "Sair da conta") {
            apiLogout();
        }
        navigation.navigate(goTo);
    }

    const handleOptions = (id: number, text: string, action: string) => {
        return (
            <TouchableOpacity style={styles.menuOptions} key={id} onPress={() => handleAction(action, text)}>
                <Text style={styles.menuOptionsText}>{text}</Text>
                <Image source={images.nav} style={styles.navegate} />
            </TouchableOpacity>
        )
    }
    const options = [{ title: "Editar perfil", action: "" }, { title: "Notificações", action: "" }, { title: "Animais para adoção", action: "" }, { title: "Alterar senha", action: "" }, { title: "Sair da conta", action: "LoginPage" }]
    return (
        <View style={styles.createAccountMain}>
            <TouchableOpacity onPress={() => handleBack()} style={styles.backArrow}>
                <Image source={images.black_arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationContainer} onPress={() => handleNotification()}>
                <Image style={styles.notification} source={turnNotifications ? images.notifications2 : images.notifications1} />
            </TouchableOpacity>

            <View style={styles.top}>
                <Image source={avatar ? { uri: avatar } : require('../../../assets/images/main_cat.png')} style={styles.profileImage} />
                <TouchableOpacity>
                    <Image source={images.edit} style={styles.edit} />
                </TouchableOpacity>
                <Image source={images.edit} style={styles.edit} />
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    {options.map((item, i) => handleOptions(i, item.title, item.action))}

                </View>
            </View>
        </View>
    )
}

export default ProfilePage;