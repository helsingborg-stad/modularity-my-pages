import * as React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
// import PaymentForm from "./PaymentForm";
import { IPlot, getPlot } from "../services/PlotsService";
import { initializePayment } from "../services/PaymentService";

interface IProps {}

interface IState {
    plot: IPlot;
    totalAmount: number;
}

class Payment extends React.Component<
    RouteComponentProps<any> & IProps,
    IState
> {
    constructor(props: RouteComponentProps<any> & IProps) {
        super(props);
        this.state = {
            plot: null,
            totalAmount: 375,
        };
    }

    componentWillMount() {
        const { location, match } = this.props;
        const plot = location.state && location.state.plot;

        if (plot) {
            this.setState({ plot });
        } else {
            this.setState({ plot: getPlot(match.params.id) });
        }
    }

    handleInputChange(name: string, value: string): void {
        console.log(name);
        console.log(value);
    }

    initializePayment = async event => {
        event.preventDefault();

        const paymentUrl = await initializePayment({
            totalAmount: this.state.totalAmount,
        });

        if (paymentUrl) {
            window.location.replace(paymentUrl);
        }
    };

    render() {
        const { plot, totalAmount } = this.state;

        return (
            <div className="grid-md-8">
                <Link to={"/tomt/reservera/" + plot.id}>« Previous</Link>
                <div className="grid row">
                    <h2>Kortbetalning</h2>
                </div>
                <div className="grid row">
                    <p>
                        Att betala <b>{totalAmount}</b> kr
                    </p>
                    <p>
                        Du kommer bli vidarebefordrad till vår partner för att
                        genomföra kortbetalningen.
                    </p>
                </div>
                {/* <PaymentForm handleInputChange={this.handleInputChange} /> */}
                <button
                    onClick={this.initializePayment}
                    className="btn btn-primary resbtn"
                >
                    Betala
                </button>
            </div>
        );
    }
}

export default withRouter(Payment);
