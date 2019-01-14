import * as React from "react";
import {
    RouteComponentProps,
    withRouter,
    Link,
    Redirect,
} from "react-router-dom";
import { IPlot, getPlot } from "../services/PlotsService";
import AcfForm from "./AcfForm";

interface IProps {}

interface IState {
    plot: IPlot;
    redirectToPaymentPage: boolean;
}

class PlotReservation extends React.Component<
    RouteComponentProps<any> & IProps,
    IState
> {
    constructor(props: RouteComponentProps<any> & IProps) {
        super(props);
        this.state = {
            plot: null,
            redirectToPaymentPage: false,
        };
    }

    componentWillMount() {
        const { location, match } = this.props;

        const plot = location.state && location.state.plot;

        if (plot === null) {
            this.setState({ plot: getPlot(match.params.id) });
        } else {
            this.setState({ plot });
        }
    }

    redirectToPayment = () => {
        this.setState({ redirectToPaymentPage: true });
    };

    render() {
        const { redirectToPaymentPage } = this.state;
        const {
            id,
            poperty_name,
            plot_size,
            price,
            area_name,
        } = this.state.plot;

        if (redirectToPaymentPage) {
            return (
                <Redirect
                    to={{
                        pathname: "/tomt/reservera/betalning/" + id,
                        state: {},
                    }}
                />
            );
        }

        return (
            <div className="grid-md-8">
                <Link to={"/tomt/" + id}>« Previous</Link>
                <div className="grid row">
                    <h2>{poperty_name}</h2>
                </div>
                <div className="grid row">
                    <p>
                        {area_name} / {plot_size} m2 / {price.toLocaleString()}
                        kr
                    </p>
                </div>
                <div className="grid row">
                    <AcfForm />
                </div>
                <button
                    className="btn btn-primary resbtn"
                    onClick={this.redirectToPayment}
                >
                    Gå till betalning
                </button>
            </div>
        );
    }
}

export default withRouter(PlotReservation);
