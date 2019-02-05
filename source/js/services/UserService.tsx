import { post, get } from "./Requests";
import { IUserInformation } from "../store/user/types";

interface IAuthResponse {
    data: {
        sucess: boolean;
        err: string;
        user: IUserInformation;
        token: string;
    };
}

interface IUserResponse {
    data: {
        user: IUserInformation;
    };
}
export const authorizeUser = async (pno: string): Promise<IAuthResponse> => {
    const host = process.env.API_URL;
    const endpoint = "/auth/";

    return await post(`${host}${endpoint}`, {
        pno,
        "0.0.0.0": String,
    }).catch(err => {
        console.log("authorizeUser err", err);
        if (err.status && err.data) {
            return Promise.reject({
                status: err.status,
                data: err.data,
            });
        }

        return Promise.reject(null);
    });
};

export const getUser = async (pno: string): Promise<IUserResponse> => {
    const host = process.env.API_URL;
    const endpoint = "/user";

    return await get(`${host}${endpoint}/${pno}`).catch(err => {
        console.log("getUser err", err);
        if (err.status && err.data) {
            return Promise.reject({
                status: err.status,
                data: err.data,
            });
        }

        return Promise.reject(null);
    });
};
