import * as React from "react";
import { OptionsObject, IFormState } from "../../store/form/types";
import { Textarea, Pagination } from "hbg-react";
import FormGroup from "./FormGroup";
import { sendForm, editForm } from "../../store/form/actions";
import store from "../../store";

interface IProps {
    form: IFormState;
}

class Form extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    // one state handler for all the elements, the elements are responsible for sending the correct input to this method
    handleChange(
        i: number,
        value?: React.ChangeEvent<HTMLInputElement>,
        array?: OptionsObject[]
    ) {
        // deep clone of object
        const formStructure = JSON.parse(
            JSON.stringify({ ...this.props.form.formStructure })
        );
        if (value) {
            formStructure.configuration[i].value = value.target.value;
        } else if (array) {
            formStructure.configuration[i].options = array;
        }
        store.dispatch<any>(editForm(formStructure));
    }

    saveChange() {
        const { form } = this.props;
        store.dispatch<any>(
            sendForm(
                "http://localhost:3001/getBygglov/test",
                form.formStructure
            )
        );
    }

    render() {
        const { formStructure } = this.props.form;
        return (
            <form method="post" action="/">
                {formStructure.configuration.map((el, i) => {
                    if (el.type === "text_input") {
                        return (
                            <div className="form-group" key={el.key}>
                                <label>{el.label}</label>
                                <input
                                    onChange={value =>
                                        this.handleChange(i, value, null)
                                    }
                                    type="text"
                                    name={el.key}
                                    id={el.key}
                                />
                            </div>
                        );
                    } else if (el.type === "text_area") {
                        return (
                            <Textarea
                                key={el.key}
                                label={el.label}
                                value={el.value}
                                handleChange={value =>
                                    this.handleChange(i, value, null)
                                }
                            />
                        );
                    } else if (
                        el.type === "single_choice" ||
                        el.type === "multiple_choice"
                    ) {
                        return (
                            <FormGroup
                                key={el.key}
                                formElement={el}
                                handleChange={array =>
                                    this.handleChange(i, null, array)
                                }
                            />
                        );
                    } else if (el.type === "output_description") {
                        return (
                            <div key={el.heading}>
                                <label>{el.heading}</label>
                                <div>{el.content}</div>
                            </div>
                        );
                    } else if (el.type === "output_break") {
                        // not sure how this will work, can't do anything with the things i get from wordpress
                        return (
                            <Pagination key={el.button_text} type={el.type} />
                        );
                    } else {
                        return <div key={i}>I didnt match anything</div>;
                    }
                })}
                {/* <button onClick={() => this.saveChange()}>save</button> */}
            </form>
        );
    }
}

export default Form;
