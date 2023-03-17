import Axios, { AxiosError } from "axios";

export const axios = Axios.create({
    baseURL: process.env.REACT_APP_HOST,
});

// axios.interceptors.response.use(
//     (response) => response.data,
//     (error: AxiosError) => {
//         throw error;
//     }
// );
