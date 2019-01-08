import * as React from "react";
import Store from "../../store/index";
import { logOut } from "../../store/user/actions";
import { IUserState } from "../../store/user/types";
import { Button } from "hbg-react";

interface IProps {
    user: IUserState;
}

interface IState {
    isLoading: boolean;
}

class AccountInformation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    logOut = () => {
        Store.dispatch<any>(logOut());
    };

    render() {
        const { user } = this.props;
        const {
            givenName,
            surname,
            name,
            personalNumber,
        } = user.userInformation;

        return (
            <div className="grid-md-6 center-content">
                <div className="grid row">
                    <div className="grid-md-6 center-content">
                        <h1>Välkommen {givenName}</h1>
                        <p> {surname} </p>
                        <p> {name} </p>
                        <p> {personalNumber} </p>
                    </div>
                </div>
                <div className="grid row">
                    <div className="grid-md-6 center-content">
                        <Button
                            color="theme-second"
                            onClick={this.logOut}
                            disabled={false}
                        >
                            <span>Logga ut</span>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountInformation;
