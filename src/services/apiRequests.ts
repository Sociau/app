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

export const apiCreatePet = async (formData: FormData) => {
    try {
        const response = await api.post("pets", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (error) {
        console.error("Erro ao criar pet:", error);
        throw error;
    }
};

export const apiCreateAccount = async (data: FormData) => {
    try {
        const account = await api.post("create_account", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return account;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const apiCreatePost = async (formData: FormData) => {
    try {
        const response = await api.post("post", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response;
    } catch (error) {
        console.error("Erro ao criar post:", error);
        throw error;
    }
};

export const apiGetPosts = async () => {
    try {
        const response = await api.get("/post");

        return response.data.Posts;
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        throw error;
    }
};
