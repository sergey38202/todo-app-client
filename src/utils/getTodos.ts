import {axiosInstance} from "./axiosInstence";

export const getTodos = async () =>
    await axiosInstance.get('/todos')