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
        // const { personalNumber, endUserIp, userVisibleData} = authRequest;
        // axios.post('http://localhost:3002/auth/', { 
        //     personalNumber, 
        //     endUserIp, 
        //     userVisibleData 
        // })
        // .then((response: AxiosResponse<any>) => {
        //     console.log('api resp', response);
        //     if (response.status != 200) {
        //         // If request was failed, dispatching FAILURE action.
        //         dispatch(loginError(response.data));
        //     } else {
        //         // When everything is ok, dispatching SUCCESS action.
        //         dispatch(loginSuccess({...response.data.user}));
        //     }
        // });
        dispatch(loginSuccess({
            personalNumber: 'string',
            name: 'string',
            givenName: 'string',
            surname: 'string'
        }));
    };
};
//# sourceMappingURL=actions.js.map