import * as React from 'react';
// import Login from './Account/Login';
import { IUserState } from '../store/user/types';
import { IFormStructure } from '../store/Form/types';
// import AccountInformation from './Account/AccountInformation';
import PlotInformation from './Plots/PlotInformation';

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
        // const { user, formStructure } = this.props;
        return (
            <div className='grid'>
                <PlotInformation />
            </div>
        );
    }
}

export default App;
