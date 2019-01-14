import * as React from "react";
import { getPlots, IPlot } from "../services/PlotsService";
import PlotRow from "./PlotRow";
import { RouteComponentProps, withRouter, Redirect } from "react-router-dom";

interface IProps {}

interface IState {
    isLoading: boolean;
    plots: IPlot[];
    redirectToDetailPage: boolean;
    chosenPlot: IPlot;
}

class PlotInformation extends React.Component<
    RouteComponentProps<any> & IProps,
    IState
> {
    constructor(props: RouteComponentProps<any> & IProps) {
        super(props);
        this.state = {
            isLoading: false,
            redirectToDetailPage: false,
            chosenPlot: null,
            plots: null,
        };
    }

    componentWillMount() {
        const fetchedPlots = getPlots();
        this.setState({ plots: fetchedPlots });
    }

    showDetailPage = (plot: IPlot) => {
        this.setState({ chosenPlot: plot });
        this.setState({ redirectToDetailPage: true });
    };

    render() {
        const { redirectToDetailPage, chosenPlot, plots } = this.state;

        if (redirectToDetailPage) {
            return (
                <Redirect
                    to={{
                        pathname: "/tomt/" + chosenPlot.id,
                        state: {
                            plot: chosenPlot,
                        },
                    }}
                />
            );
        }

        return (
            <div className="grid-md-8">
                <div className="grid row">
                    <h3>
                        Här hittar du lediga tomter, ställer dig i tomtkö,
                        följer dina ärenden och får svar på vanliga frågor om
                        tomtkön. Lediga tomter publiceras i början av varje år.
                    </h3>
                </div>
                <div className="grid row">
                    <p>
                        Lediga tomter publiceras i början av varje år och
                        möjlighet finns att anmäla intresse fram till den 28
                        februari. De tomter som inte fördelats kan komma att
                        publiceras igen och fördelas under året.
                    </p>
                </div>
                <div className="grid row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Lediga tomter</th>
                                <th />
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {plots.map((plot: IPlot, index) => {
                                return (
                                    <PlotRow
                                        key={plot.id + index}
                                        Plot={plot}
                                        showDetailPage={this.showDetailPage}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(PlotInformation);
