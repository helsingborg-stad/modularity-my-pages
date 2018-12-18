import * as React from "react";
import { IFormStructure } from "../../store/form/types";
import { Input, Textarea, Pagination } from 'hbg-react';
import FormGroup from './FormGroup';

interface IProps {
    formStructure: IFormStructure;
}

interface IState {
    isLoading: boolean;
}

class Form extends React.Component<IProps, IState> {   
    constructor(props: IProps) {
        super(props);
        this.state = { 
            isLoading: false
        };
    }

    handleChange () {
        console.log('handleChange')
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
        console.log(this.props)
        const { formStructure } = this.props;
        return (
            <div>
                {
                    formStructure.structure.configuration.map((el, i) => {
                        console.log(el)
                        if(el.key === 'text_input') {
                            return <Input key={i} id={i} label={el.label} instructions={el.instructions} statement={el.statement} required={el.required}/>
                        } else if (el.key === 'text_area') {
                            return <Textarea key={i} id={i} label={el.label} instructions={el.instructions} statement={el.statement} required={el.required}/>
                        } else if (el.key === 'radio_buttons' || el.key === 'checkboxes') {
                            return <FormGroup key={i} formElement={el}/>
                        } else if (el.heading === 'Description') {
                            return <Textarea key={i} id={i} label={el.label} instructions={el.instructions} statement={el.statement} required={el.required}/>
                        } else if (el.button_text === 'next page') {
                            return <Pagination key={i}></Pagination>
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