var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Constants } from './types';
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
var init = {
    form: {
        PersonNr: '',
    },
    loading: false,
    error: null
};
export function personReducer(state, action) {
    if (state === void 0) { state = init; }
    console.log('this is switch');
    switch (action.type) {
        case Constants.LOGIN_ATTEMPT:
            console.log('login attempt');
            return __assign({}, state, { loading: true });
        case Constants.LOGGED_FAILED:
            console.log('logged failed');
            return __assign({}, state, { loading: false, error: true });
        case Constants.LOGGED_SUCCESSFULLY:
            console.log('logged successful');
            return __assign({}, state, { loading: false, error: null, form: __assign({}, action.form) });
            break;
        default:
            console.log('default switch');
            return state;
    }
}
//# sourceMappingURL=reducer.js.map