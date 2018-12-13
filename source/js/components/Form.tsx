import * as React from "react";
import { IRootState } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../store/person/actions';
import { PersonActions } from '../store/person/types';
import Input from './Input';
import InputBare from './InputBare';
import { IForm } from '../store/person/types';

const mapDispatcherToProps = (dispatch: Dispatch<PersonActions>) => {
    return {
        sendForm: (form: IForm) => dispatch<any>(actions.sendForm(form)),
    };
};

const mapStateToProps = ({ person }: IRootState) => {
    const { form, loading, error } = person;
    return { form, loading, error };
};

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IState {
    editedForm: IForm
};

class Form extends React.Component<ReduxType, IState> {
    state: IState = {
        editedForm: Object.assign({}, this.props.form)
    }

    onSendClick = () => {
        const { sendForm } = this.props;
        console.log('onSendClick')
        sendForm(this.state.editedForm);
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ editedForm: { PersonNr: e.target.value }});
    }

    render() {
        const { form, loading } = this.props;
        console.log(this.props.error)
        return (
            <div style={{margin: '20px'}}>
                <input onChange={this.onInputChange}/>
                <div>{form.PersonNr} HejHejHej</div>
                <button onClick={this.onSendClick}>Add</button>
                <Input PersonNr={form.PersonNr} updatePersonNr={this.onInputChange}/>
                <InputBare {...form} updatePersonNr={this.onInputChange} />
                {
                    loading && <p>loading...</p>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Form);