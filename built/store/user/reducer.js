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
    userInformation: {
        name: '',
        givenName: '',
        surname: '',
        personalNumber: '',
    },
};
export function userReducer(state, action) {
    if (state === void 0) { state = init; }
    switch (action.type) {
        case Const.AUTH_FAIL:
            return __assign({}, state, { 
                // TODO add error message
                isAuthenticated: false });
        case Const.AUTH_SUCCESS:
            return __assign({}, state, { isAuthenticated: true, userInformation: __assign({}, action.value) });
        case Const.AUTH_LOGOUT:
            return __assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map