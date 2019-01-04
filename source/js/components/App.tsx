import * as React from 'react';
import { IUserState } from '../store/user/types';
import { IFormStructure } from '../store/Form/types';
import PlotInformation from './Plots/PlotInformation';
import {
    Route,
    Switch
  } from 'react-router-dom';

import PlotDetails from './Plots/PlotDetails';

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
             <Switch>
                <Route exact path='/' component={() => <PlotInformation />} />
                <Route exact path='/tomt/:id' component={() => <PlotDetails />} />
             </Switch>
            </div>
        );
    }
}

export default App;
