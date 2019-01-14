import * as React from "react";
import { Textarea, Pagination } from "hbg-react";
import { IField, IOption } from "../services/FormService";
import FormGroup from "./FormGroup";

interface IProps {
    index: number;
    field: IField;
    handleChange: (
        i: number,
        value?: React.ChangeEvent<HTMLInputElement>,
        array?: IOption[]
    ) => void;
}

class FormField extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { index, field, handleChange } = this.props;
        console.log(field);
        switch (field.type) {
            case "text_input":
                return (
                    <div className="form-group" key={field.key}>
                        <label>{field.label}</label>
                        <input
                            onChange={value => handleChange(index, value, null)}
                            type="text"
                            name={field.key}
                            id={field.key}
                        />
                    </div>
                );
            case "text_input":
                return (
                    <Textarea
                        key={field.key}
                        label={field.label}
                        value={field.value}
                        handleChange={value => handleChange(index, value, null)}
                    />
                );
            case "single_choice":
            case "multiple_choice":
                return (
                    <FormGroup
                        key={field.key}
                        formElement={field}
                        handleChange={array => handleChange(index, null, array)}
                    />
                );
            case "output_description":
                return (
                    <div key={field.heading}>
                        <label>{field.heading}</label>
                        <div>{field.content}</div>
                    </div>
                );
            case "output_break":
                // not sure how this will work, can't do anything with the things i get from wordpress
                return <Pagination key={field.button_text} type={field.type} />;
            default:
                return <div key={field.key}>I didnt match anything</div>;
        }
    }
}

export default FormField;
