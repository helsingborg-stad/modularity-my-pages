import * as React from "react";
import TextInput from "./shared/TextInput";

interface IProps {
    handleInputChange: ((e: React.FormEvent<HTMLInputElement>) => void);
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
                    handleInputChange={handleInputChange}
                />
                <TextInput
                    label="Kortnummer"
                    name="Kortnummer"
                    id="cardNumber"
                    handleInputChange={handleInputChange}
                />
                <div className="form-group">
                    <label>Giltighetstid (MM/ÅÅ)</label>
                    <input
                        onChange={value => handleInputChange(value)}
                        type="text"
                        name="Månad"
                        id="month"
                    />
                    <input
                        onChange={value => handleInputChange(value)}
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
                />
            </div>
        );
    }
}

export default PaymentForm;
