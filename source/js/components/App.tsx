import * as React from 'react';
import Login from './Account/Login';
import { IUserState } from '../store/user/types';
import Form from './FormFolder/Form';
import { IFormStructure } from '../store/Form/types';
import AccountInformation from './Account/AccountInformation';

interface IProps {
    user: IUserState;
    formStructure: IFormStructure;
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

    render() {
        const { user, formStructure } = this.props;
        return (
            <div className='grid'>
                <div className='grid-fit-content u-mr-auto center-content'>
                     {user.isAuthenticated ?
                        <div>
                            <AccountInformation user={user} />
                            <Form formStructure={formStructure} />
                        </div>
                        :
                        <div>
                            <Login user={user} />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;
