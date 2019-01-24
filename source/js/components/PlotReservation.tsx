import * as React from "react";
import {
    RouteComponentProps,
    withRouter,
    Link,
    Redirect,
} from "react-router-dom";
import { IPlot, getPlot } from "../services/PlotsService";
import AcfForm from "./AcfForm";
import Spinner from "./shared/Spinner";

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

        if (plot) {
            this.setState({ plot });
        } else {
            this.setState({ plot: getPlot(match.params.id) });
        }
    }

    redirectToPayment = () => {
        this.setState({ redirectToPaymentPage: true });
    };

    render() {
        const { redirectToPaymentPage } = this.state;

        if (redirectToPaymentPage) {
            return (
                <Redirect
                    to={{
                        pathname:
                            "/tomt/reservera/betalning/" +
                            this.props.location.state.match.params.id,
                        state: {},
                    }}
                />
            );
        }

        if (this.state.plot) {
            const {
                id,
                poperty_name,
                plot_size,
                price,
                area_name,
            } = this.state.plot;

            return (
                <div className="grid-md-8">
                    <Link to={"/tomt/" + id}>« Previous</Link>
                    <div className="grid row">
                        <h2>{poperty_name}</h2>
                    </div>
                    <div className="grid row">
                        <p>
                            {area_name} / {plot_size} m2 /{" "}
                            {price.toLocaleString()}
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
        } else {
            return <Spinner message="Laddar tomtinformation..." />;
        }
    }
}

export default withRouter(PlotReservation);
