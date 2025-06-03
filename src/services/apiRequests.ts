import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "./api"

export const apiGetHome = async () => {
    try {
        const home = await api.get("")
        return home
    } catch (error) {
        console.error(error)
    }

}

export const apiCreateAccount = async (data: any) => {
    try {

        const account = await api.post("create_account", {
            username: data.username,
            password: data.password,
        })

        return account

    } catch (error) {
        console.error(error)
    }
}

export const apiLogin = async (data: any) => {
    try {

        const user = await api.post("login", {
            username: data.username,
            password: data.password
        })

        return user

    } catch (error) {
        console.error(error)
    }
}

export const apiLogout = async () => {
    try {
        await AsyncStorage.removeItem("token")
        await AsyncStorage.removeItem("user")
    } catch (error) {
        console.error(error)
    }
}