import * as React from 'react';
import Login from './Account/Login';
import { IUserState } from '../store/user/types';
import AccountInformation from './Account/AccountInformation';

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
            isLoading: true,
        };
    }

    public render() {
        return (
        <div className='grid'>
            <div className='grid-fit-content u-mr-auto main-content-container'>
            {this.props.user.isAuthenticated ?
                <AccountInformation {...this.props} />
                :
                <Login {...this.props} />
            }
            </div>
        </div>
        );
    }
}

export default App;
