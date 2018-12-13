import { Constants, PersonActions, IPersonState } from './types';
/*
const init: IPersonState = {
    form: {
        PersonNr: '',
    },
    loading: false,
    error: null
};

export function personReducer(state: IPersonState = init, 
action: PersonActions): IPersonState {
    switch (action.type) {
        case Constants.ADD_TODO_STARTED:
            return {
                ...state,
                loading: true
            };
        case Constants.ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                form: {...action.payload.form}
            };
        case Constants.ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}
*/

const init: IPersonState = {
    form: {
        PersonNr: '',
    },
    loading: false,
    error: null
};

 export function personReducer(state: IPersonState = init, 
    action: PersonActions): IPersonState {
        console.log('this is switch')
    switch (action.type) {
      case Constants.LOGIN_ATTEMPT:
      console.log('login attempt')
        return {
            ...state,
            loading: true
        }
      case Constants.LOGGED_FAILED:
      console.log('logged failed')
        return {
            ...state,
            loading: false,
            error: true
        }
      case Constants.LOGGED_SUCCESSFULLY:
      console.log('logged successful')
        return {
            ...state,
            loading: false,
            error: null,
            form: {...action.form}
        };
        break;
      default:
      console.log('default switch')
        return state;
    }
}