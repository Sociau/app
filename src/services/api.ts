import Config from 'react-native-config';

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
    baseURL: "https://1a50-2804-9f8-4980-fd2c-98a9-579f-af14-41f0.ngrok-free.app/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;