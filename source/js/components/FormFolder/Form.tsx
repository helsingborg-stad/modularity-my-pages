import * as React from "react";
import { FormStructure } from "../../store/form/types";
import { Input, Textarea, Pagination } from 'hbg-react';
import FormGroup from './FormGroup';
import { editForm } from '../../store/form/actions';
import store from '../../store';

interface IProps {
    formStructure: FormStructure;
}

interface IState {
    isLoading: boolean,
    editedForm: FormStructure
}

class Form extends React.Component<IProps, IState> {   
    constructor(props: IProps) {
        super(props);
        this.state = { 
            isLoading: false,
            editedForm: {
                configuration: [],
                service_description: '',
                service_heading: '',
                service_response: false,
                state: false
            }
        };
    }

    handleChange (i: number ,e: React.ChangeEvent<HTMLInputElement>) {
        const { formStructure } = this.props;
        const editedForm = formStructure
        editedForm.configuration[i].value = e.target.value;
        console.log('handleChange')
        console.log(e.target.value)
        console.log(i)
        console.log(editedForm)
    }

    saveChange () {
        const { editedForm } = this.state;
        store.dispatch<any>(
            editForm(editedForm)
        );
    }

    /*
        Vi har föjande i hbg-react:
            button
            dropdown
            input
            notice
            pagination
            textarea
            wordpressauthform
    */

    render() {
        const { formStructure } = this.props;
        return (
            <div>
                {
                    formStructure.configuration.map((el, i) => {
                        if(el.type === 'text_input') {
                            return <Input handleChange={(e) => this.handleChange(i, e)} key={el.key} id={i} label={el.label} instructions={el.instructions} statement={el.statement} required={el.required}/>
                        } else if (el.type === 'text_area') {
                            return <Textarea key={el.key} id={i} nr={i} label={el.label} instructions={el.instructions} statement={el.statement} required={el.required}/>
                        } else if (el.type === 'single_choice' || el.type === 'multiple_choice') {
                            return <FormGroup key={el.key} formElement={el}/>
                        } else if (el.type === 'output_description') {
                            return <Textarea key={el.heading} id={el.key} label={el.label} instructions={el.instructions} statement={el.statement} required={el.required}/>
                        } else if (el.type === 'output_break') {
                            return <Pagination key={el.button_text}></Pagination>
                        } else {
                            return <div key={i}>I didnt match anything</div>
                        }
                    })
                }
            </div>
        );
    }
}

export default Form;