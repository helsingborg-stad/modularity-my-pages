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
import PlotInformation from './Plots/PlotInformation';
import { Route, Switch } from 'react-router-dom';
import PlotDetails from './Plots/PlotDetails';
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
        // const { user, formStructure } = this.props;
        return (React.createElement("div", { className: 'grid' },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: '/', component: function () { return React.createElement(PlotInformation, null); } }),
                React.createElement(Route, { exact: true, path: '/tomt/:id', component: function () { return React.createElement(PlotDetails, null); } }))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map