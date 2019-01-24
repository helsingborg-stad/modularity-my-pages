import { Const, UserInformation } from "./types";

export type Action =
    | { type: Const.AUTH_FAIL; value: any }
    | { type: Const.AUTH_SUCCESS; value: UserInformation }
    | { type: Const.AUTH_LOGOUT };

export const loginError = (value: any): Action => {
    // TODO add error message
    return { value, type: Const.AUTH_FAIL };
};

export const loginSuccess = (value: UserInformation): Action => {
    return { value, type: Const.AUTH_SUCCESS };
};

export const logoutRequest = () => {
    return { type: Const.AUTH_LOGOUT };
};
