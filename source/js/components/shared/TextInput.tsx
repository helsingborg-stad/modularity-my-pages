import * as React from "react";

interface IProps {
    label: string;
    name: string;
    id: string;
    handleInputChange: ((e: React.FormEvent<HTMLInputElement>) => void);
}

const TextInput = (props: IProps) => {
    const { label, name, id, handleInputChange } = props;

    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                onChange={value => handleInputChange(value)}
                type="text"
                name={name}
                id={id}
            />
        </div>
    );
};

export default TextInput;
