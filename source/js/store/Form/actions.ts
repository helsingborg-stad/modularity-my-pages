 import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Const, FormRequest } from './types';

export type Action =
  { type: Const.FORM_FAIL, value: any }
| { type: Const.FORM_REQ, value: boolean }
| { type: Const.FORM_SUC, value: string }


export const formRequests = (value: boolean): Action => {
    return { value, type: Const.FORM_REQ };
}

export const formError = (value: any): Action => {
    return { value, type: Const.FORM_FAIL };
}

export const formSuccess = (value: string): Action => {
    return { value, type: Const.FORM_SUC };
}

export const reqForm = (formRequest: FormRequest) => {
    return (dispatch: Dispatch) => {
        // Dispatching REQUEST action, which tells our app, that we have started requesting authentication.
        dispatch(formRequests(true))

        // const { endUserIp, moduleId } = formRequest;
        console.log('do i try')
        // axios.post(`${endUserIp}${moduleId}`)
        axios.get('http://localhost:8888/wordpress/wp-json/ModularityMyPages/v1/GetFieldConfiguration/18')
        .then((response: AxiosResponse<any>) => {
            console.log('api resp', response);
            if (response.status != 200) {
                console.log('reqform failed in action')
                // If request was failed, dissspatching FAILURE action.
                dispatch(formError(response.data));
            } else {
                console.log(response.data);

                // When everything is ok, dispatching SUCCESS action.
                dispatch(formSuccess({...response.data}));
            }
        });
    }
  }