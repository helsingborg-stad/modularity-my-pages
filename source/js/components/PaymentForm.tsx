import * as React from "react";
import TextInput from "./shared/TextInput";

interface IProps {
    handleInputChange: (name: string, value: string) => void;
}

interface IState {}

class PaymentForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        const { handleInputChange } = this.props;
        return (
            <div className="grid row">
                <TextInput
                    label="Kortinnehavare"
                    name="Kortinnehavare"
                    id="cardHolder"
                    defaultValue=""
                    handleInputChange={handleInputChange}
                />
                <TextInput
                    label="Kortnummer"
                    name="Kortnummer"
                    id="cardNumber"
                    handleInputChange={handleInputChange}
                    defaultValue=""
                />
                <div className="form-group">
                    <label>Giltighetstid (MM/ÅÅ)</label>
                    <input
                        onChange={element =>
                            handleInputChange(
                                element.target.id,
                                element.target.value
                            )
                        }
                        type="text"
                        name="Månad"
                        id="month"
                    />
                    <input
                        onChange={element =>
                            handleInputChange(
                                element.target.id,
                                element.target.value
                            )
                        }
                        type="text"
                        name="År"
                        id="year"
                    />
                </div>
                <TextInput
                    label="Säkerhetskod (CVV)"
                    name="CVV"
                    id="cvv"
                    handleInputChange={handleInputChange}
                    defaultValue=""
                />
            </div>
        );
    }
}

export default PaymentForm;
