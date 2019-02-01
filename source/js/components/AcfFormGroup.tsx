import * as React from "react";
import { FormElement, OptionsObject } from "../store/Form/types";

interface IProps {
    handleChange: (value: OptionsObject[]) => void;
    formElement: FormElement;
}

class AcfFormGroup extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    // sends correct data input to the parents handleChange method
    handleChangeRadio = (
        i: number,
        e: React.ChangeEvent<HTMLInputElement>,
        button: string
    ) => {
        // deep clone
        const options = JSON.parse(
            JSON.stringify(this.props.formElement.options)
        );
        if (button === "radio") {
            options.map((el, k) => {
                if (i === k) {
                    el.active = true;
                } else {
                    el.active = false;
                }
            });
        } else if (button === "checkbox") {
            options[i].active = !options[i].active;
        }
        this.props.handleChange(options);
    };

    render() {
        const { formElement } = this.props;
        return (
            <div className="form-group">
                {formElement.options.map((el, i) => {
                    return formElement.label === "Radio_Buttons" ? (
                        <label key={i} className="radio">
                            {el.label}
                            <input
                                onChange={e =>
                                    this.handleChangeRadio(i, e, "radio")
                                }
                                type="radio"
                                value={el.value}
                                name="radio"
                            />
                            {el.value}
                        </label>
                    ) : (
                        <label key={i} className="checkbox">
                            <input
                                onChange={e =>
                                    this.handleChangeRadio(i, e, "checkbox")
                                }
                                type="checkbox"
                            />
                            {el.label}
                        </label>
                    );
                })}
            </div>
        );
    }
}

export default AcfFormGroup;
