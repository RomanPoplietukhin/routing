import axios from "axios";

export const customAxios = axios.create({
    baseURL: 'https://61f5558a62f1e300173c40f3.mockapi.io/'
})