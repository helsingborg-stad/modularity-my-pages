import * as React from "react";
import { FormElement } from '../../store/Form/types'

interface Props {
    formElement: FormElement
}

class FormGroup extends React.Component<Props> {
    render() {
        const { formElement } = this.props;

        return (
            <div className="form-group">
                {
                    formElement.options.map((el, i) => {
                        return (
                            formElement.label === 'Radio_Buttons' ? 
                                <label key={i} className="radio">
                                    <input type="radio" name="radio"/>{el.label}
                                </label>
                                :
                                <label key={i} className="checkbox">
                                    <input type="checkbox"/>{el.label}
                                </label>
                        )
                    })
                }
            </div>
        )
    }
}

export default FormGroup;