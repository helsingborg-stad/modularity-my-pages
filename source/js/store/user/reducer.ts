import { Const, IUserState } from './types';
import { Action } from './actions';

const init: IUserState = {
    isAuthenticated: false,
    authInProgress: false,
    userInformation: {
        name: '',
        givenName: '',
        surname: '',
        personalNumber: ''
    }
};

 export function userReducer(state: IUserState = init, action: Action): IUserState {
    console.log('action', action);
    switch (action.type) {
      case Const.AUTH_REQ:
      console.log('login attempt')
        return {
            ...state,
            authInProgress: true,
            isAuthenticated: false
        }
      case Const.AUTH_FAIL:
      console.log('login failure')
        return {
            ...state,
            authInProgress: false,
            isAuthenticated: false,
        }
      case Const.AUTH_SUCCESS:
      console.log('login success')
        return {
            ...state,
            isAuthenticated: true,
            authInProgress: false,
            userInformation: {...action.value}
        };
      default:
        return state;
    }
}