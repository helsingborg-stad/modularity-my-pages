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
import * as React from 'react';
import Login from './Account/Login';
import AccountInformation from './Account/AccountInformation';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: 'grid' },
            React.createElement("div", { className: 'grid-fit-content u-mr-auto main-content-container' }, this.props.user.isAuthenticated ?
                React.createElement(AccountInformation, __assign({}, this.props))
                :
                    React.createElement(Login, __assign({}, this.props)))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map