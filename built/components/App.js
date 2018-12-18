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
import Login from './Account/Login';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true
        };
        return _this;
    }
    App.prototype.render = function () {
        var user = this.props.user;
        var _a = user.userInformation, givenName = _a.givenName, surname = _a.surname, name = _a.name, personalNumber = _a.personalNumber;
        return (React.createElement("div", { className: 'grid grid--columns' },
            React.createElement("div", { className: 'grid-sm-12' }, user.isAuthenticated ?
                React.createElement("div", null,
                    React.createElement("h1", null, "React h2"),
                    React.createElement("p", null,
                        " ",
                        givenName,
                        " "),
                    React.createElement("p", null,
                        " ",
                        surname,
                        " "),
                    React.createElement("p", null,
                        " ",
                        name,
                        " "),
                    React.createElement("p", null,
                        " ",
                        personalNumber,
                        " "))
                :
                    React.createElement(Login, { user: user }))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map