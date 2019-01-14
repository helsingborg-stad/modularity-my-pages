import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IUserState } from "../store/user/types";
import Login from "./Login";
import PlotInformation from "./PlotInformation";
import PlotReservation from "./PlotReservation";
import PlotDetails from "./PlotDetails";

interface IProps {
    user: IUserState;
}

interface IState {
    isLoading: boolean;
}

function PrivateRoute({ component: Component, authed, ...rest }) {
    console.log("authed", authed);
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
}
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
