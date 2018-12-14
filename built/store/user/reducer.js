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
import { Const } from './types';
var init = {
    isAuthenticated: false,
    authInProgress: false,
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
        case Const.AUTH_REQ:
            console.log('login attempt');
            return __assign({}, state, { authInProgress: true, isAuthenticated: false });
        case Const.AUTH_FAIL:
            console.log('login failure');
            return __assign({}, state, { authInProgress: false, isAuthenticated: false });
        case Const.AUTH_SUCCESS:
            console.log('login success');
            return __assign({}, state, { isAuthenticated: true, authInProgress: false, userInformation: __assign({}, action.value) });
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map