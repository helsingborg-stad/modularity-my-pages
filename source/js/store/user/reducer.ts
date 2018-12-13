import { Constants, UserActions, IUserState } from './types';

const init: IUserState = {
    isAuthenticated: false,
    userInformation: {
        name: '',
        givenName: '',
        surname: '',
        personalNumber: ''
    }
};

 export function userReducer(state: IUserState = init, action: UserActions): IUserState {
    console.log('action', action);
    switch (action.type) {
      case Constants.AUTHENTICATION_REQUEST:
      console.log('login attempt')
        return {
            ...state,
            isAuthenticated: false
        }
      case Constants.AUTHENTICATION_FAILURE:
      console.log('login failure')
        return {
            ...state,
            isAuthenticated: false,
        }
      case Constants.AUTHENTICATION_SUCCESS:
      console.log('login success')
        return {
            ...state,
            isAuthenticated: true,
            userInformation: {...action.userInformation}
        };
      default:
        return state;
    }
}