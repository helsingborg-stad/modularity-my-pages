import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Const, FormRequest, FormStructure } from "./types";

export type Action =
    | { type: Const.FORM_FAIL; value: any }
    | { type: Const.FORM_REQ }
    | { type: Const.FORM_SUC; value: FormStructure }
    | { type: Const.FORM_EDIT; value: FormStructure }
    | { type: Const.FORM_POST }
    | { type: Const.FORM_POST_SUC };

export const formRequests = (): Action => {
    return { type: Const.FORM_REQ };
};

export const formError = (value: any): Action => {
    return { value, type: Const.FORM_FAIL };
};

export const formSuccess = (value: FormStructure): Action => {
    return { value, type: Const.FORM_SUC };
};

export const editForm = (value: FormStructure): Action => {
    return { value, type: Const.FORM_EDIT };
};

export const sendFormSuc = (): Action => {
    return { type: Const.FORM_POST_SUC };
};

export const formPost = (): Action => {
    return { type: Const.FORM_POST };
};

export const reqForm = (formRequest: FormRequest) => {
    return (dispatch: Dispatch) => {
        // Dispatching REQUEST action, which tells our app, that we have started requesting authentication.
        dispatch(formRequests());
        axios
            .get(`${formRequest.endUserIp}${formRequest.moduleId}`)
            .then((response: AxiosResponse<any>) => {
                if (response.status !== 200) {
                    // If request was failed, dissspatching FAILURE action.
                    dispatch(formError(response.data));
                } else {
                    // When everything is ok, dispatching SUCCESS action.
                    dispatch(formSuccess({ ...response.data }));
                }
            });
    };
};

export const sendForm = (endUserIp: string, value: FormStructure) => {
    return (dispatch: Dispatch) => {
        // Dispatching REQUEST action, which tells our app, that we have started requesting authentication.
        dispatch(formPost());
        axios.post(endUserIp, value).then((response: AxiosResponse<any>) => {
            if (response.status !== 200) {
                // If request was failed, dissspatching FAILURE action.
                dispatch(formError(response.data));
            } else {
                // When everything is ok, dispatching SENDFORMSUC action
                dispatch(sendFormSuc());
            }
        });
    };
};
