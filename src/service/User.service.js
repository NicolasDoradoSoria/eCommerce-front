import AxiosClient from "@/config/Axios";

export const loginService = async (data) => {
    const response = await AxiosClient.post("/api/auth/login", data);
    return response
}

export const sigUpService = async (data) => {
    return await AxiosClient.post("/api/auth/register", data);
}