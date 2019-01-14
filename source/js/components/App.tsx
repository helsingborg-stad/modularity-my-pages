import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IUserState } from "../store/user/types";
import Login from "./Login";
import PlotInformation from "./PlotInformation";
import PlotReservation from "./PlotReservation";
import PlotDetails from "./PlotDetails";
import Payment from "./Payment";

interface IProps {
    user: IUserState;
}

interface IState {
    isLoading: boolean;
}

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/tomt/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    render() {
        const { user } = this.props;

        return (
            <div className="grid">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <PlotInformation />}
                    />
                    <Route
                        exact
                        path="/tomt/login"
                        component={() => <Login user={user} />}
                    />
                    <PrivateRoute
                        authed={user.isAuthenticated}
                        exact
                        path="/tomt/reservera/:id"
                        component={() => <PlotReservation />}
                    />
                    <PrivateRoute
                        authed={user.isAuthenticated}
                        exact
                        path="/tomt/reservera/betalning/:id"
                        component={() => <Payment />}
                    />
                    <Route
                        exact
                        path="/tomt/:id"
                        component={() => <PlotDetails />}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
