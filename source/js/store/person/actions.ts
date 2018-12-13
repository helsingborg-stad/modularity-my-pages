import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IForm } from './types';

export const loginError = (form: IForm) => {
  return { form, type: 'LOGGED_FAILED' };
}

export const loginRequest = (form: IForm) => {
  return { form, type: 'LOGIN_ATTEMPT' };
}

export const loginSuccess = (form: IForm) => {
  return (dispatch: Dispatch) => {
    dispatch({ form, type: 'LOGGED_SUCCESSFULLY' });
  };
}

export const sendForm = (form: IForm)  => {
    return (dispatch: Dispatch) => {
        axios.post('http://localhost:3260/getNavet/', {
            id: form.PersonNr
        })
        .then((response: AxiosResponse<any>) => {
            if (response.status >= 200 && response.status < 300) {
                let returnForm: IForm = {PersonNr: ''}
                returnForm.PersonNr = response.data.id
                dispatch({ form, type: 'LOGGED_SUCCESSFULLY' }); 
            } else {
                const error = new Error(response.statusText);
                dispatch({ error, type: 'LOGGED_FAILED' });
            }
        })
        .catch((error) => { 
            console.log('error object')
            console.log(error);
            dispatch({ error, type: 'LOGGED_FAILED' });
        });
    }
}