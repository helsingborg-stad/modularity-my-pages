import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { AuthRequest, Constants, UserInformation } from './types';

export const loginRequest = (userInformation: UserInformation) => {
    return { userInformation, type: Constants.AUTHENTICATION_REQUEST};
}

export const loginError = (userInformation: UserInformation) => {
    return { userInformation, type: Constants.AUTHENTICATION_FAILURE };
}

export const loginSuccess = (userInformation: UserInformation) => {
    return (dispatch: Dispatch) => {
      dispatch({ userInformation, type: Constants.AUTHENTICATION_SUCCESS });
    };
}

export const authenticate = (authRequest: AuthRequest) => {
    return (dispatch: Dispatch) => {
        // Dispatching REQUEST action, which tells our app, that we have started requesting authentication.
        dispatch({
        type: Constants.AUTHENTICATION_REQUEST
        });

        const { personalNumber, endUserIp, userVisibleData} = authRequest;

        axios.post('http://localhost:3002/auth/', { 
            personalNumber, 
            endUserIp, 
            userVisibleData 
        })
        .then((response: AxiosResponse<any>) => {
            console.log('api resp', response);
            if (response.status != 200) {
                // If request was failed, dispatching FAILURE action.
                dispatch({
                type: Constants.AUTHENTICATION_FAILURE,
                });
            } else {
                // When everything is ok, dispatching SUCCESS action.
                dispatch({
                    type: Constants.AUTHENTICATION_SUCCESS,
                    userInformation: {...response.data.user}
                });
            }
        });
    }
  }