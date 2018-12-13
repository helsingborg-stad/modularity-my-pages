import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux';
import store from './store';

let ModularityMyPages = {
    App: null
};

ModularityMyPages.App = class {
    constructor()
    {
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById("app") as HTMLElement
        );
    }
}

new ModularityMyPages.App();
