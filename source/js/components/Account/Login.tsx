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
    authInProgress: boolean;
}

class Login extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: false,
            authInProgress: false,
        };
    }

    authenticateUser = () => {
        this.setState({ authInProgress: true });

        setTimeout(() => {
            Store.dispatch<any>(
                authenticate({
                    personalNumber: '195811123073',
                    endUserIp: '194.168.2.25',
                    userVisibleData: 'Helsingborg stad',
                })
            );
        }, 1000);
    }

    cancelAuthentication = () => {
        console.log('cancel');
    }

    handleInput = (e: any) => {
        console.log(e);
    }

    render() {
        return (
            <div className='grid-md-6 center-content'>
                <div className='grid row'>
                    <div className='grid-md-6 center-content'>
                        <img src={bankidLogo} width='150px' height='150px' className='center-image' />
                    </div>
                </div>
                {this.state.authInProgress === false ?
                <>
                    <div className='grid row'>
                        <div className='grid-md-6 center-content'>
                            <Input
                                id='pno'
                                name='pno'
                                type='text'
                                placeholder='Skriv in ditt personnummer här...'
                                onChange={this.handleInput}
                            />
                        </div>
                    </div>

                    <div className='grid row'>
                        <div className='grid-md-6 center-content'>
                            <div className='pull-left'>
                                <Button
                                    color='theme-second'
                                    onClick={this.cancelAuthentication}
                                    disabled={false}
                                >
                                    <span>Avbryt</span>
                                </Button>
                            </div>
                            <div className='pull-right'>
                                <Button
                                    color='theme-second'
                                    onClick={this.authenticateUser}
                                    disabled={false}
                                >
                                    <span>Logga in</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className='grid row'>
                    <div className='grid-md-6 center-content'>
                        <div className='text-center row'>Signera ditt bankid...</div>
                        <div className='spinner spinner-dark center-content row'></div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Login;
