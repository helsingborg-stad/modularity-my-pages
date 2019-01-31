import "../sass/modularity-my-pages.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import store, * as IStore from "./store";
import { IUserState } from "./store/user/types";
import { loginSuccess, logoutRequest } from "./store/user/actions";
import { getUser } from "./services/UserService";
import {
    getAuthToken,
    removeAuthToken,
    validateToken,
    getUserPno,
    removeUserPno,
} from "./helpers/TokenHelper";
import App from "./components/App";
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

    // if token and pno exists in local storage we try to restore the user state.
    initUser = async () => {
        const token = getAuthToken();

        // if token exists and is valid, try to fetch the user.
        if (token && validateToken(token)) {
            const pno = getUserPno();

            if (pno) {
                const user = await getUser(pno).catch(() => null);

                // if user is found automatically log in the user and set the userdata.
                if (user) {
                    store.dispatch(loginSuccess({ ...user }));
                }
            }
        }
    };

    logOut = () => {
        // remove token and user pno from localStorage and dispatch logout action.
        removeAuthToken();
        removeUserPno();
        store.dispatch(logoutRequest());
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
