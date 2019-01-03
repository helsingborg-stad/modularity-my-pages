var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Store from '../../store/index';
import { authenticate } from '../../store/user/actions';
import { Button, Input } from 'hbg-react';
import bankidLogo from '../../assets/img/bankid/bankid_low_rgb.png';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.authenticateUser = function () {
            _this.setState({ authInProgress: true });
            setTimeout(function () {
                Store.dispatch(authenticate({
                    personalNumber: '195811123073',
                    endUserIp: '194.168.2.25',
                    userVisibleData: 'Helsingborg stad',
                }));
            }, 1000);
        };
        _this.cancelAuthentication = function () {
            console.log('cancel');
        };
        _this.handleInput = function (e) {
            console.log(e);
        };
        _this.state = {
            isLoading: false,
            authInProgress: false,
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { className: 'grid-md-6 center-content' },
            React.createElement("div", { className: 'grid row' },
                React.createElement("div", { className: 'grid-md-6 center-content' },
                    React.createElement("img", { src: bankidLogo, width: '150px', height: '150px', className: 'center-image' }))),
            this.state.authInProgress === false ?
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: 'grid row' },
                        React.createElement("div", { className: 'grid-md-6 center-content' },
                            React.createElement(Input, { id: 'pno', name: 'pno', type: 'text', placeholder: 'Skriv in ditt personnummer h\u00E4r...', onChange: this.handleInput }))),
                    React.createElement("div", { className: 'grid row' },
                        React.createElement("div", { className: 'grid-md-6 center-content' },
                            React.createElement("div", { className: 'pull-left' },
                                React.createElement(Button, { color: 'theme-second', onClick: this.cancelAuthentication, disabled: false },
                                    React.createElement("span", null, "Avbryt"))),
                            React.createElement("div", { className: 'pull-right' },
                                React.createElement(Button, { color: 'theme-second', onClick: this.authenticateUser, disabled: false },
                                    React.createElement("span", null, "Logga in"))))))
                :
                    React.createElement("div", { className: 'grid row' },
                        React.createElement("div", { className: 'grid-md-6 center-content' },
                            React.createElement("div", { className: 'text-center row' }, "Signera ditt bankid..."),
                            React.createElement("div", { className: 'spinner spinner-dark center-content row' })))));
    };
    return Login;
}(React.Component));
export default Login;
//# sourceMappingURL=Login.js.map