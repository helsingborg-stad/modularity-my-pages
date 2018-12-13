import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux';
import store from './store';
var ModularityMyPages = {
    App: null
};
ModularityMyPages.App = /** @class */ (function () {
    function class_1() {
        ReactDOM.render(React.createElement(Provider, { store: store },
            React.createElement(App, null)), document.getElementById("app"));
    }
    return class_1;
}());
new ModularityMyPages.App();
//# sourceMappingURL=modularity-my-pages.js.map