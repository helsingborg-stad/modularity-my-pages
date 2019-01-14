import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import "../sass/modularity-my-pages.scss";
import store, * as IStore from "./store";
import { IUserState } from "./store/user/types";
import App from "./components/App";

interface IMappedProps {
    user: IUserState;
}

interface IState {}

class StartPage extends React.Component<IMappedProps, IState> {
    constructor(props: IMappedProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HashRouter>
                <div className="container">
                    <App user={this.props.user} />
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: IStore.IRootState) => {
    return {
        user: state.user,
    };
};

const ConnectedStartPage = connect(mapStateToProps)(StartPage);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedStartPage />
    </Provider>,
    document.getElementById("app") as HTMLElement
);
