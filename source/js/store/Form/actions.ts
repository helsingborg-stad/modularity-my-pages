import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Const, FormRequest, FormStructure } from "./types";

export type Action =
    | { type: Const.FORM_FAIL; value: any }
    | { type: Const.FORM_REQ; value: boolean }
    | { type: Const.FORM_SUC; value: FormStructure };

export const formRequests = (value: boolean): Action => {
    return { value, type: Const.FORM_REQ };
};

export const formError = (value: any): Action => {
    return { value, type: Const.FORM_FAIL };
};

export const formSuccess = (value: FormStructure): Action => {
    return { value, type: Const.FORM_SUC };
};

export const reqForm = (formRequest: FormRequest) => {
    return (dispatch: Dispatch) => {
        // Dispatching REQUEST action, which tells our app, that we have started requesting authentication.
        dispatch(formRequests(true));

        // const { endUserIp, moduleId } = formRequest;
        // axios.post(`${endUserIp}${moduleId}`)
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
