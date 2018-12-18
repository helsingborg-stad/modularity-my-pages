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
import * as React from "react";
import Store from '../../store/index';
import { authenticate } from '../../store/user/actions';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.authenticateUser = function () {
            Store.dispatch(authenticate({
                personalNumber: '195811123073',
                endUserIp: '194.168.2.25',
                userVisibleData: 'Helsingborg stad'
            }));
        };
        _this.state = {
            isLoading: false
        };
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { className: "box-content" },
            React.createElement("input", { type: "text", placeholder: "Skriv in ditt personnummer h\u00E4r..." }),
            React.createElement("button", { onClick: this.authenticateUser }, "Logga in"),
            this.props.user.authInProgress &&
                React.createElement("div", null, " loader... ")));
    };
    return Login;
}(React.Component));
export default Login;
//# sourceMappingURL=Login.js.map