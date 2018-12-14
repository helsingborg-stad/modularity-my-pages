import * as React from "react";
import Store from '../../store/index';
import { authenticate } from '../../store/user/actions';
import { IUserState } from "../../store/user/types";

interface IProps {
    user: IUserState;
}

interface IState {
    isLoading: boolean;
}


class Login extends React.Component<IProps, IState> {   
    constructor(props: IProps) {
        super(props);
        this.state = { 
            isLoading: false
        };
    }
    
    authenticateUser = () => {
        Store.dispatch<any>(
            authenticate({
                personalNumber: '195811123073',
                endUserIp: '194.168.2.25',
                userVisibleData: 'Helsingborg stad'
            })
        )
    }

    render() {
        return (
            <div>
               Login
               <button onClick={this.authenticateUser}>Logga in</button>
               {this.props.user.authInProgress && 
                <div> loader... </div>}
            </div>
        );
    }
}

export default Login;