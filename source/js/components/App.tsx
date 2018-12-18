import * as React from 'react';
import Login from './Account/Login';
import { IUserState } from '../store/user/types';
import Form from './FormFolder/Form';
import { IFormStructure } from '../store/Form/types';

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
        const { givenName, surname, name, personalNumber } = user.userInformation;
        return (
        <div>
            {user.isAuthenticated ?
                    <div>
                        <h1>React h1</h1>
                        <p> {givenName} </p>
                        <p> {surname} </p>
                        <p> {name} </p>
                        <p> {personalNumber} </p>
                    </div>
                    :
                    <div>
                        <h1>React h1</h1>
                        <Login user={user} />
                        <Form formStructure={formStructure}/>
                    </div>

            }
        </div>
        );
    }
}

export default App;
