import * as React from "react";
import Login from './Account/Login';
import { IUserState } from '../store/user/types';

interface IProps {
    user: IUserState;
}

interface IState {
    isLoading: boolean;
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: true
        };
      }
    render() {
        console.log(this.props)
        if (this.props.user.isAuthenticated) {
            return (
                <div>
                    <p> {this.props.user.userInformation.givenName} </p>
                    <p> {this.props.user.userInformation.surname} </p>
                    <p> {this.props.user.userInformation.name} </p>
                    <p> {this.props.user.userInformation.personalNumber} </p>
                </div>
            );
        } else {
            return (
                <Login user={this.props.user} />
            )
        }
    }
}

export default App