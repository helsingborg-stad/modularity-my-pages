import * as React from 'react';
import Store from '../../store/index';
import { authenticate } from '../../store/user/actions';
import { IUserState } from '../../store/user/types';
import { Button, Input } from 'hbg-react';
import bankidLogo from '../../assets/img/bankid/bankid_low_rgb.png';

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
            isLoading: false,
        };
    }

    public authenticateUser = () => {

        this.setState({ isLoading: true });

        Store.dispatch<any>(
            authenticate({
                personalNumber: '195811123073',
                endUserIp: '194.168.2.25',
                userVisibleData: 'Helsingborg stad',
            })
        );
    }

    public cancelAuthentication = () => {
        console.log('cancel');
    }

    public render() {
        return (
            <div className='grid sm-gutter grid-va-middle'>
                <div className='grid-s-fit-content'>
                    <img src={bankidLogo} width='150px' height='150px' className='center-image' />
                </div>

                <div className='grid-s-fit-content'>
                    <Input id='pno' type='text' placeholder='Skriv in ditt personnummer här...' />
                </div>

                <div className='grid'>
                    <div className='grid-fit-content center-content'>
                        <Button color='primary' onClick={this.authenticateUser} disabled={false}>
                                    <i className='pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl'></i>
                                    <span className='u-hidden@xs u-hidden@sm'>Avbryt</span>
                        </Button>
                    </div>
                    <div className='grid-fit-content center-content'>
                        <Button color='primary' onClick={this.authenticateUser} disabled={false}>
                                    <i className='pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl'></i>
                                    <span className='u-hidden@xs u-hidden@sm'>Logga in</span>
                        </Button>
                    </div>
                </div>

                {this.state.isLoading &&
                <div> loader... </div>}
            </div>
        );
    }
}

export default Login;
