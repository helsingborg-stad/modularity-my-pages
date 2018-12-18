import * as React from 'react';
import Store from '../../store/index';
import { logOut } from '../../store/user/actions';
import { IUserState } from '../../store/user/types';
import { Button } from 'hbg-react';

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
        Store.dispatch<any>(
            logOut()
        );
    }

    render() {

        const { user } = this.props;
        const { givenName, surname, name, personalNumber } = user.userInformation;

        return (
            <div>
            <h1>Välkommen {givenName}</h1>
            <p> {surname} </p>
            <p> {name} </p>
            <p> {personalNumber} </p>
            <div className='grid'>
                <div className='grid-fit-content'>
                    <Button color='primary' onClick={this.logOut} disabled={false}>
                                <i className='pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl'></i>
                                <span className='u-hidden@xs u-hidden@sm'>Logga ut</span>
                    </Button>
                </div>
            </div>
        </div>
        );
    }
}

export default AccountInformation;
