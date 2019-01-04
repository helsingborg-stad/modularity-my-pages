import * as React from 'react';
import { IPlot, getPlot } from '../../services/PlotsService';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IState {
    plot: IPlot;
}

interface IProps {}

class PlotDetails extends React.Component<RouteComponentProps<any> & IProps, IState> {
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
        const { poperty_name, plot_size, price, area_name } = this.state.plot;

        return (
            <div className='grid-md-8'>
                <div className='grid row'>
                    <h2>{poperty_name}</h2>
                </div>
                <div className='grid row'>
                    <p> {area_name} / {plot_size} m2 / {price.toLocaleString()} kr</p>
                </div>
                <div className='grid row'>
                    <p>Tomten kan tillträdas omgående efter fördelning. Tomten kommer att anslutas till Öresundskrafts
                        naturgasnät. Kostnader för anslutning till gasnät tillkommer. <b>
                        Tomten kan reserveras för 375 kr.</b>
                    </p>
                </div>
                <div className='grid row'>
                    <p>
                        För mer information:
                        042-10 53 51 / infotomt@helsingborg.se
                    </p>
                </div>
            </div>
        );
    }
}

export default withRouter(PlotDetails);
