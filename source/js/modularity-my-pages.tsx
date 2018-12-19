import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider, connect } from 'react-redux';
import store, * as IStore from './store';
import { IUserState } from './store/user/types';
import '../sass/modularity-my-pages.scss';
import { FormStructure } from './store/Form/types';
import { reqForm } from './store/form/actions';

interface IMappedProps {
    user: IUserState;
    formStructure: FormStructure;
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

    reqFormForRender = () => {
        const endUserIp = 'http://localhost:8888/wordpress/wp-json/ModularityMyPages/v1/GetFieldConfiguration/';
        const moduleId = document.getElementById('app').dataset.configurationId;

        store.dispatch<any>(
            reqForm({
                endUserIp,
                moduleId,
            })
        );
    }

    componentWillMount() {
        this.reqFormForRender();
    }

    render() {
        return (
            <div className='container'>
                <App user={this.props.user} formStructure={this.props.formStructure} />
            </div>
        );
    }
}

const mapStateToProps = (state: IStore.IRootState) => {
    return {
        user: state.user,
        formStructure: state.formStructure,
    };
  };

const ConnectedStartPage = connect(mapStateToProps)(StartPage);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedStartPage />
    </Provider>,
    document.getElementById('app') as HTMLElement
);
