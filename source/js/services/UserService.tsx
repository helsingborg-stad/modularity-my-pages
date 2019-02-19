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

    const data = {
        pno,
        endUserIp: "0.0.0.0", // TODO: Need a way to capture the user ip address either here or move it to the backend.
    };

    return await post(`${host}${endpoint}`, data).catch(err => {
        console.log("authorizeUser err", err);
        if (err.status && err.data) {
            Promise.reject({
                status: err.status,
                data: err.data,
            });
        }

        Promise.reject(null);
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
