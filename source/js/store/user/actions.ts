import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { AuthRequest, Const, UserInformation } from './types';

export type Action =
  { type: Const.AUTH_FAIL, value: any }
| { type: Const.AUTH_SUCCESS, value: UserInformation }
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

export const authenticate = (authRequest: AuthRequest) => {
    return (dispatch: Dispatch) => {

        const { personalNumber, endUserIp, userVisibleData} = authRequest;

        axios.post('http://localhost:3002/auth/test', {
            personalNumber,
            endUserIp,
            userVisibleData,
        })
        .then((response: AxiosResponse<any>) => {
            console.log('api resp', response);
            if (response.status !== 200) {
                // If request was failed, dispatching FAILURE action.
                dispatch(loginError(response.data));
            } else {
                // When everything is ok, dispatching SUCCESS action.
                dispatch(loginSuccess({...response.data.user}));
            }
        });
    };
};

export const logOut = () => {
    return (dispatch: Dispatch) => {
        dispatch(logoutRequest());
    };
};
