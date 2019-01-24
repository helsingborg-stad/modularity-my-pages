import * as React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import PaymentForm from "./PaymentForm";

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

    handleInputChange(e: React.FormEvent<HTMLInputElement>) {
        console.log(e.target);
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
                <PaymentForm handleInputChange={this.handleInputChange} />
                <button className="btn btn-primary resbtn">Betala</button>
            </div>
        );
    }
}

export default withRouter(Payment);
