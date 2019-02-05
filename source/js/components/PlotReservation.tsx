import * as React from "react";
import {
    RouteComponentProps,
    withRouter,
    Link,
    Redirect,
} from "react-router-dom";
import { IPlot, getPlot } from "../services/PlotsService";
import { InputData, submitFormData } from "../services/FormService";
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

    // Add value of changed input dynamically to state with name as key.
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {
            [event.target.name]: event.target.value,
        };
        // Typescript has a bug where there is no good way to cast dynamic state properties,
        // so the workaround is to use any as the type for now. See https://github.com/Microsoft/TypeScript/issues/13948
        this.setState(newState as any);
    };

    submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Get all inputs that are saved in state and add them to an array with key and values.
        const formValues = Object.keys(this.state)
            // Filter unrelated state properties.
            .filter(key => key !== "plot" && key !== "redirectToPaymentPage")
            .reduce(
                (all: InputData[], curr) =>
                    all.concat({
                        key: curr,
                        value: this.state[curr],
                    } as InputData),
                []
            );

        const result = await submitFormData(formValues);

        if (result && result.isSuccess) {
            this.setState({ redirectToPaymentPage: true });
        }
    };

    render() {
        const { redirectToPaymentPage } = this.state;

        if (redirectToPaymentPage) {
            return (
                <Redirect
                    to={{
                        pathname:
                            "/tomt/reservera/betalning/" + this.state.plot.id,
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
                        <form method="post" action="/">
                            <AcfForm handleInputChange={this.handleChange} />
                            <div className="form-group">
                                <button
                                    className="btn btn-primary resbtn"
                                    onClick={this.submitForm}
                                >
                                    Gå till betalning
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return <Spinner message="Laddar tomtinformation..." />;
        }
    }
}

export default withRouter(PlotReservation);
