import * as React from "react";
import { IPlot, getPlot } from "../../services/PlotsService";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import Form from "../Form/Form";
import { IFormState } from "../../store/Form/types";

interface IProps {
    form: IFormState;
}

interface IState {
    plot: IPlot;
}

class PlotReservation extends React.Component<
    RouteComponentProps<any> & IProps,
    IState
> {
    constructor(props: RouteComponentProps<any> & IProps) {
        super(props);
        this.state = {
            plot: null,
        };
    }

    componentWillMount() {
        const plot =
            this.props.location.state && this.props.location.state.plot;

        if (plot == null) {
            this.setState({ plot: getPlot(this.props.match.params.id) });
        } else {
            this.setState({ plot });
        }
    }

    render() {
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
                        {" "}
                        {area_name} / {plot_size} m2 / {price.toLocaleString()}{" "}
                        kr
                    </p>
                </div>
                <div className="grid row">
                    <Form form={this.props.form} />
                </div>
                <button className="btn btn-primary resbtn">Betala</button>
            </div>
        );
    }
}

export default withRouter(PlotReservation);
