import * as React from "react";
import Store from "../store/index";
import { loginError, loginSuccess } from "../store/user/actions";
import { IUserState } from "../store/user/types";
import { Button, Input } from "hbg-react";
import bankidLogo from "../assets/img/bankid/bankid_low_rgb.png";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import Spinner from "./shared/Spinner";
import { authorizeUser } from "../services/UserService";
import { setAuthToken, setUserPno } from "../helpers/TokenHelper";
import { validatePno } from "../helpers/ValidationHelper";

interface IProps {
    user: IUserState;
}

interface IState {
    isLoading: boolean;
    showError: boolean;
    personalNumberInput: string;
}

class Login extends React.Component<RouteComponentProps<any> & IProps, IState> {
    constructor(props: RouteComponentProps<any> & IProps) {
        super(props);
        this.state = {
            isLoading: false,
            showError: false,
            personalNumberInput: "",
        };
    }

    authenticateUser = () => {
        this.setState({ isLoading: true });

        const { personalNumberInput } = this.state;

        if (validatePno(personalNumberInput)) {
            setTimeout(() => {
                this.sendAuthorizeRequest(personalNumberInput);
            }, 1000);
        } else {
            this.setState({ isLoading: false, showError: true });
        }
    };

    sendAuthorizeRequest = async (personalNumber: string): Promise<void> => {
        const authResponse = await authorizeUser(personalNumber);

        if (authResponse) {
            console.log("authResponse ok", authResponse);
            // When everything is ok, saving token, pno and dispatching SUCCESS action.
            setAuthToken(authResponse.data.token);
            setUserPno(authResponse.data.user.personalNumber);
            Store.dispatch(loginSuccess({ ...authResponse.data.user }));
        } else {
            console.log("authResponse fail", authResponse);
            // If login failed, dispatching FAILURE action.
            Store.dispatch(
                loginError(authResponse ? authResponse.data.err : null)
            );
        }
    };

    handlePnoInputChange = (value: string) => {
        this.setState({
            personalNumberInput: value,
        });
    };

    cancelAuthentication = () => {
        this.props.history.push("/");
    };

    render() {
        const { from } = this.props.location.state || {
            from: { pathname: "/" },
        };

        if (this.props.user.isAuthenticated === true) {
            return <Redirect to={from} />;
        }

        return (
            <div className="grid-md-6 center-content">
                <div className="grid row">
                    <div className="grid-md-6 center-content">
                        <img
                            src={bankidLogo}
                            width="150px"
                            height="150px"
                            className="center-image"
                        />
                    </div>
                </div>
                {this.state.isLoading === false ? (
                    <>
                        <div className="grid row">
                            <div className="grid-md-6 center-content">
                                <Input
                                    id="pno"
                                    name="pno"
                                    type="text"
                                    placeholder="Skriv in ditt personnummer här..."
                                    handleChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) =>
                                        this.handlePnoInputChange(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                        {this.state.showError && (
                            <div className="grid row">
                                <div className="grid-md-6 center-content">
                                    <p className="inputErrorText">
                                        Personnumret har fel format, var vänlig
                                        försök igen.
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className="grid row">
                            <div className="grid-md-6 center-content">
                                <div className="pull-left">
                                    <Button
                                        color="theme-second"
                                        onClick={this.cancelAuthentication}
                                        disabled={false}
                                    >
                                        <span>Avbryt</span>
                                    </Button>
                                </div>
                                <div className="pull-right">
                                    <Button
                                        color="theme-second"
                                        onClick={this.authenticateUser}
                                        disabled={false}
                                    >
                                        <span>Logga in</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Spinner message="Signera med ditt bankid..." />
                )}
            </div>
        );
    }
}

export default withRouter(Login);
