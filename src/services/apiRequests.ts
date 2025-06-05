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
            email: data.email,
            password: data.password,
            name: data.name,
            main_whatsapp: data.main_whatsapp,
            second_whatsapp: data.second_whatsapp,
            about_you: data.about_you,
            nickname: data.nickname,
            state: data.state,
            city: data.city,
            street: data.street,
            neighborhood: data.neighborhood
        })

        return account

    } catch (error) {
        console.error(error)
    }
}

export const apiLogin = async (data: any) => {
    try {
        const user = await api.post("login", {
            email: data.email,
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
        await AsyncStorage.removeItem("nickname");
        await AsyncStorage.removeItem("avatar");
        await AsyncStorage.removeItem("name");
        await AsyncStorage.removeItem("user_id");
    } catch (error) {
        console.error(error)
    }
}

export const apiGetPets = async () => {
    try {
        const pets = await api.get("pets")
        return pets
    } catch (error) {
        console.error(error)
    }
}

export const apiGetPetById = async (id: number) => {
    try {
        const pet = await api.get(`pets/${id}`)
        return pet
    } catch (error) {
        console.error(error)
    }
}

export const getUserById = async (id: number) => {
    try {
        const userId = await api.get(`user/${id}`)
        return userId
    } catch (error) {
        console.error(error)
    }
}