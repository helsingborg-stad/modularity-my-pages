import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IUserState } from "../store/user/types";
import { IFormStructure } from "../store/Form/types";
import Login from "./Account/Login";
import Form from "./FormFolder/Form";
import PlotInformation from "./Plots/PlotInformation";
import PlotReservation from "./Plots/PlotReservation";
import PlotDetails from "./Plots/PlotDetails";

interface IProps {
    user: IUserState;
    formStructure: IFormStructure;
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
        const { user, formStructure } = this.props;

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
                    <Route
                        exact
                        path="/tomt/form"
                        component={() => <Form formStructure={formStructure} />}
                    />
                    <Route
                        exact
                        path="/tomt/:id"
                        component={() => <PlotDetails />}
                    />
                    <PrivateRoute
                        authed={user.isAuthenticated}
                        exact
                        path="/tomt/:id/reservera"
                        component={() => <PlotReservation />}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
