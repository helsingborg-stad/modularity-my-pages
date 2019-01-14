import * as React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";

interface IProps {}

interface IState {
    totalAmount: number;
}

class Payment extends React.Component<
    RouteComponentProps<any> & IProps,
    IState
> {
    constructor(props: RouteComponentProps<any> & IProps) {
        super(props);
        this.state = {
            totalAmount: 375,
        };
    }

    componentWillMount() {
        //
    }

    handleChange(value: any) {
        //
    }

    render() {
        return (
            <div className="grid-md-8">
                <Link to={"/tomt/"}>« Previous</Link>
                <div className="grid row">
                    <h2>Kortbetalning</h2>
                </div>
                <div className="grid row">
                    <p>Att betala {this.state.totalAmount} kr</p>
                </div>
                <div className="grid row">
                    <div className="form-group">
                        <label>Kortinnehavare</label>
                        <input
                            onChange={value => this.handleChange(value)}
                            type="text"
                            name="Kortinnehavare"
                            id="cardHolder"
                        />
                    </div>
                    <div className="form-group">
                        <label>Kortnummer</label>
                        <input
                            onChange={value => this.handleChange(value)}
                            type="text"
                            name="Kortnummer"
                            id="CardNumber"
                        />
                    </div>
                    <div className="form-group">
                        <label>Giltighetstid (MM/ÅÅ)</label>
                        <input
                            onChange={value => this.handleChange(value)}
                            type="text"
                            name="Månad"
                            id="month"
                        />
                        <input
                            onChange={value => this.handleChange(value)}
                            type="text"
                            name="År"
                            id="year"
                        />
                    </div>
                    <div className="form-group">
                        <label>Säkerhetskod (CVV)</label>
                        <input
                            onChange={value => this.handleChange(value)}
                            type="text"
                            name="CVV"
                            id="cvv"
                        />
                    </div>
                </div>
                <button className="btn btn-primary resbtn">Betala</button>
            </div>
        );
    }
}

export default withRouter(Payment);
