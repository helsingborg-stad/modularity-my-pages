import axios from 'axios';
export var loginError = function (form) {
    return { form: form, type: 'LOGGED_FAILED' };
};
export var loginRequest = function (form) {
    return { form: form, type: 'LOGIN_ATTEMPT' };
};
export var loginSuccess = function (form) {
    return function (dispatch) {
        dispatch({ form: form, type: 'LOGGED_SUCCESSFULLY' });
    };
};
export var sendForm = function (form) {
    return function (dispatch) {
        axios.post('http://localhost:3260/getNavet/', {
            id: form.PersonNr
        })
            .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                var returnForm = { PersonNr: '' };
                returnForm.PersonNr = response.data.id;
                dispatch({ form: form, type: 'LOGGED_SUCCESSFULLY' });
            }
            else {
                var error = new Error(response.statusText);
                dispatch({ error: error, type: 'LOGGED_FAILED' });
            }
        })
            .catch(function (error) {
            console.log('error object');
            console.log(error);
            dispatch({ error: error, type: 'LOGGED_FAILED' });
        });
    };
};
//# sourceMappingURL=actions.js.map