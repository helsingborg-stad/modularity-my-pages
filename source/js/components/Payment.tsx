import * as React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
// import PaymentForm from "./PaymentForm";
import { IPlot, getPlot } from "../services/PlotsService";
import { initializePayment } from "../services/PaymentService";
import { IUserState } from "../store/user/types";

interface IProps {
    user: IUserState;
}

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
            totalAmount: 375, // TODO: This should probably be fetched/calculated via backend.
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

    initializePayment = async event => {
        event.preventDefault();

        // Init payment via api (this also creates order in db).
        const paymentUrl = await initializePayment({
            totalAmount: this.state.totalAmount,
            personalNumber: this.props.user.userInformation.personalNumber,
        });

        // Redirect user to paynova external payment site to finish payment.
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
