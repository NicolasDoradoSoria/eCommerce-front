import AxiosClient from "@/config/Axios";

export async function getCategoryList() {
    return await AxiosClient.get(`/api/category`);
}

export async function postCategory(data) {
    return await AxiosClient.post(`/api/category`, data)
}