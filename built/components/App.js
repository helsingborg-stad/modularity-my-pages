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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Account/Login";
import Form from "./FormFolder/Form";
import PlotInformation from "./Plots/PlotInformation";
import PlotReservation from "./Plots/PlotReservation";
import PlotDetails from "./Plots/PlotDetails";
function PrivateRoute(_a) {
    var Component = _a.component, authed = _a.authed, rest = __rest(_a, ["component", "authed"]);
    console.log("authed", authed);
    return (React.createElement(Route, __assign({}, rest, { render: function (props) {
            return authed === true ? (React.createElement(Component, __assign({}, props))) : (React.createElement(Redirect, { to: {
                    pathname: "/tomt/login",
                    state: { from: props.location },
                } }));
        } })));
}
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
        var _a = this.props, user = _a.user, form = _a.form;
        return (React.createElement("div", { className: "grid" },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/", component: function () { return React.createElement(PlotInformation, null); } }),
                React.createElement(Route, { exact: true, path: "/tomt/login", component: function () { return React.createElement(Login, { user: user }); } }),
                React.createElement(Route, { exact: true, path: "/tomt/form", component: function () { return React.createElement(Form, { form: form }); } }),
                React.createElement(Route, { exact: true, path: "/tomt/:id", component: function () { return React.createElement(PlotDetails, null); } }),
                React.createElement(PrivateRoute, { authed: user.isAuthenticated, exact: true, path: "/tomt/:id/reservera", component: function () { return React.createElement(PlotReservation, null); } }))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map