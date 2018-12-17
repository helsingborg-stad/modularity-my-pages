import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { AuthRequest, Const, UserInformation } from './types';

export type Action =
  { type: Const.AUTH_FAIL, value: any }
| { type: Const.AUTH_REQ, value: boolean }
| { type: Const.AUTH_SUCCESS, value: UserInformation }


export const loginRequest = (value: boolean): Action => {
    return { value, type: Const.AUTH_REQ };
}

export const loginError = (value: any): Action => {
    return { value, type: Const.AUTH_FAIL };
}

export const loginSuccess = (value: UserInformation): Action => {
    return { value, type: Const.AUTH_SUCCESS };
}

export const authenticate = (authRequest: AuthRequest) => {
    return (dispatch: Dispatch) => {
        // Dispatching REQUEST action, which tells our app, that we have started requesting authentication.
        dispatch(loginRequest(true))

        const { personalNumber, endUserIp, userVisibleData} = authRequest;

        // axios.post('http://localhost:3002/auth/', { 
        //     personalNumber, 
        //     endUserIp, 
        //     userVisibleData 
        // })
        // .then((response: AxiosResponse<any>) => {
        //     console.log('api resp', response);
        //     if (response.status != 200) {
        //         // If request was failed, dispatching FAILURE action.
        //         dispatch(loginError(response.data));
        //     } else {
        //         // When everything is ok, dispatching SUCCESS action.
        //         dispatch(loginSuccess({...response.data.user}));
        //     }
        // });

        dispatch(loginSuccess({
            personalNumber: 'string',
            name: 'string',
            givenName: 'string',
            surname: 'string'
        }));
    }
  }