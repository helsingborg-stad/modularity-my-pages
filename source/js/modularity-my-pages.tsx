import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import "../sass/modularity-my-pages.scss";
import store, * as IStore from "./store";
import { IUserState } from "./store/user/types";
import App from "./components/App";
import { loginSuccess, logoutRequest } from "./store/user/actions";
import Store from "./store/index";
import { getUser } from "./services/UserService";
import { getToken, removeToken } from "./helpers/TokenHelper";
import Header from "./components/shared/Header";

interface IMappedProps {
    user: IUserState;
}

interface IState {}

class StartPage extends React.Component<IMappedProps, IState> {
    constructor(props: IMappedProps) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.initUser();
    }

    initUser = async () => {
        const token = getToken();

        if (token) {
            const user = await getUser("");

            if (user) {
                Store.dispatch(loginSuccess({ ...user }));
            }
        }
    };

    logOut = () => {
        removeToken();
        Store.dispatch(logoutRequest());
    };

    render() {
        return (
            <HashRouter>
                <div className="container">
                    {this.props.user.isAuthenticated && (
                        <Header user={this.props.user} logOut={this.logOut} />
                    )}
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
