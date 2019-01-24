import { post, get } from "./Requests";
import { UserInformation } from "../store/user/types";

interface IAuthResponse {
    sucess: boolean;
    token: string;
    err: string;
    user: any;
}

export const authorizeUser = async (pno: string): Promise<IAuthResponse> => {
    const host = "https://localhost:3005";
    const endpoint = "/auth/";

    const response = await post(`${host}${endpoint}`, {
        pno,
        "0.0.0.0": String,
    });

    if (response) {
        return response.data;
    } else {
        return null;
    }
};

export const getUser = async (pno: string): Promise<UserInformation> => {
    const host = "https://localhost:3005";
    const endpoint = "/auth/user/";

    const response = await get(`${host}${endpoint}`);

    if (response) {
        return response.data.user;
    } else {
        return null;
    }
};
