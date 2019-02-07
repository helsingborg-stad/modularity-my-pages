import * as React from "react";

interface IProps {
    label: string;
    name: string;
    id: string;
    defaultValue: string;
    handleInputChange: ((name: string, value: string) => void);
}

const TextInput = (props: IProps) => {
    const { label, name, id, handleInputChange, defaultValue } = props;

    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                onChange={value =>
                    handleInputChange(value.target.name, value.target.value)
                }
                type="text"
                name={name}
                id={id}
                defaultValue={defaultValue}
            />
        </div>
    );
};

export default TextInput;
