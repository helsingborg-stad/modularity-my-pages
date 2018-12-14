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
import axios from 'axios';
import { Const } from './types';
export var loginRequest = function (value) {
    return { value: value, type: Const.AUTH_REQ };
};
export var loginError = function (value) {
    return { value: value, type: Const.AUTH_FAIL };
};
export var loginSuccess = function (value) {
    return { value: value, type: Const.AUTH_SUCCESS };
};
export var authenticate = function (authRequest) {
    return function (dispatch) {
        // Dispatching REQUEST action, which tells our app, that we have started requesting authentication.
        dispatch(loginRequest(true));
        var personalNumber = authRequest.personalNumber, endUserIp = authRequest.endUserIp, userVisibleData = authRequest.userVisibleData;
        axios.post('http://localhost:3002/auth/', {
            personalNumber: personalNumber,
            endUserIp: endUserIp,
            userVisibleData: userVisibleData
        })
            .then(function (response) {
            console.log('api resp', response);
            if (response.status != 200) {
                // If request was failed, dispatching FAILURE action.
                dispatch(loginError(response.data));
            }
            else {
                // When everything is ok, dispatching SUCCESS action.
                dispatch(loginSuccess(__assign({}, response.data.user)));
            }
        });
    };
};
//# sourceMappingURL=actions.js.map