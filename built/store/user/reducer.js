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
var init = {
    isAuthenticated: false,
    userInformation: {
        name: '',
        givenName: '',
        surname: '',
        personalNumber: ''
    }
};
export function userReducer(state, action) {
    if (state === void 0) { state = init; }
    console.log('action', action);
    switch (action.type) {
        case Constants.AUTHENTICATION_REQUEST:
            console.log('login attempt');
            return __assign({}, state, { isAuthenticated: false });
        case Constants.AUTHENTICATION_FAILURE:
            console.log('login failure');
            return __assign({}, state, { isAuthenticated: false });
        case Constants.AUTHENTICATION_SUCCESS:
            console.log('login success');
            return __assign({}, state, { isAuthenticated: true, userInformation: __assign({}, action.userInformation) });
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map