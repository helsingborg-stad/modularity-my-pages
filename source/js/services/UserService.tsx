import { post, get } from "./Requests";
import { UserInformation, IUserState } from "../store/user/types";

interface IAuthResponse {
    data: {
        sucess: boolean;
        err: string;
        user: UserInformation;
        token: string;
    };
}

export const authorizeUser = async (pno: string): Promise<IAuthResponse> => {
    const host = "https://localhost:3005";
    const endpoint = "/auth/";

    return await post(`${host}${endpoint}`, {
        pno,
        "0.0.0.0": String,
    }).catch(() => null);
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
