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
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.authenticateUser = function () {
            _this.setState({ isLoading: true });
            Store.dispatch(authenticate({
                personalNumber: '195811123073',
                endUserIp: '194.168.2.25',
                userVisibleData: 'Helsingborg stad',
            }));
        };
        _this.cancelAuthentication = function () {
            console.log('cancel');
        };
        _this.state = {
            isLoading: false,
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { className: 'grid sm-gutter grid-va-middle' },
            React.createElement("div", { className: 'grid-s-fit-content' },
                React.createElement(Input, { id: 'pno', type: 'text', placeholder: 'Skriv in ditt personnummer h\u00E4r...' })),
            React.createElement("div", { className: 'grid' },
                React.createElement("div", { className: 'grid-fit-content' },
                    React.createElement(Button, { color: 'primary', onClick: this.authenticateUser, disabled: false },
                        React.createElement("i", { className: 'pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl' }),
                        React.createElement("span", { className: 'u-hidden@xs u-hidden@sm' }, "Avbryt"))),
                React.createElement("div", { className: 'grid-fit-content' },
                    React.createElement(Button, { color: 'primary', onClick: this.authenticateUser, disabled: false },
                        React.createElement("i", { className: 'pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl' }),
                        React.createElement("span", { className: 'u-hidden@xs u-hidden@sm' }, "Logga in")))),
            this.state.isLoading &&
                React.createElement("div", null, " loader... ")));
    };
    return Login;
}(React.Component));
export default Login;
//# sourceMappingURL=Login.js.map