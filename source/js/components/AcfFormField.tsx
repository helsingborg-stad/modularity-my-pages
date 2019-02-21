import * as React from "react";
import { Textarea, Pagination } from "hbg-react";
import { IField } from "../services/FormService";
// import AcfFormGroup from "./AcfFormGroup";
import TextInput from "./shared/TextInput";

interface IProps {
    index: number;
    field: IField;
    defaultValue: string;
    handleInputChange: ((name: string, value: string) => void);
}

class AcfFormField extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { field, handleInputChange, defaultValue } = this.props;

        switch (field.type) {
            case "text_input":
                return (
                    <TextInput
                        label={field.label}
                        name={field.key}
                        id={field.key}
                        handleInputChange={handleInputChange}
                        defaultValue={defaultValue}
                    />
                );
            case "text_area":
                return (
                    <Textarea
                        key={field.key}
                        label={field.label}
                        value={field.value}
                        handleInputChange={handleInputChange}
                        defaultValue={defaultValue}
                    />
                );
            case "single_choice":
            // case "multiple_choice":
            //     return (
            //         <AcfFormGroup
            //             key={field.key}
            //             formElement={field}
            //             handleChange={array => handleInputChange(array)}
            //         />
            //     );
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

export default AcfFormField;
