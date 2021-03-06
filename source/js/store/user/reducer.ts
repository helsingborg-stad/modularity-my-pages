import { Const, IUserState, IUserInformation } from "./types";
import { Action } from "./actions";

const init: IUserState = {
    isAuthenticated: false,
    userInformation: {
        name: "",
        givenName: "",
        surname: "",
        personalNumber: "",
        address: "",
        zipCode: "",
        city: "",
    } as IUserInformation,
};

export const userReducer = (
    state: IUserState = init,
    action: Action
): IUserState => {
    switch (action.type) {
        case Const.AUTH_FAIL:
            return {
                ...state,
                // TODO: add error message
                isAuthenticated: false,
            };
        case Const.AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userInformation: { ...action.value },
            };
        case Const.AUTH_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                userInformation: {
                    name: "",
                    givenName: "",
                    surname: "",
                    personalNumber: "",
                    address: "",
                    zipCode: "",
                    city: "",
                },
            };
        default:
            return state;
    }
};
