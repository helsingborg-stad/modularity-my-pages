import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider, connect } from 'react-redux';
import store, * as IStore from './store';
import { IUserState } from './store/user/types';
import '../sass/modularity-my-pages.scss';

interface IMappedProps {
    user: IUserState;
}

// tslint:disable-next-line:no-empty-interface
interface IState {
}

class StartPage extends React.Component<IMappedProps, IState> {
    constructor(props: IMappedProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <div className='container'>
                <App user={this.props.user} />
            </div>
        );
    }
}

const mapStateToProps = (state: IStore.IRootState) => {
    return {
        user: state.user,
    };
  };

const ConnectedStartPage = connect(mapStateToProps)(StartPage);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedStartPage />
    </Provider>,
    document.getElementById('app') as HTMLElement
);
