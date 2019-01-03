import * as React from 'react';
import { getPlots, IPlot } from '../../services/PlotsService';
import PlotRow from './PlotRow';

interface IProps {
}

interface IState {
}

class PlotInformation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    render() {
        const plots = getPlots();

        return (
            <div className='grid-md-8'>
                <div className='grid row'>
                    <h3>
                        Här hittar du lediga tomter, ställer dig i tomtkö,
                        följer dina ärenden och får svar på vanliga frågor om tomtkön.
                        Lediga tomter publiceras i början av varje år.
                    </h3>
                </div>
                <div className='grid row'>
                    <p>
                        Lediga tomter publiceras i början av varje år och möjlighet
                        finns att anmäla intresse fram till den 28 februari.
                        De tomter som inte fördelats kan komma att publiceras igen
                        och fördelas under året.
                    </p>
                </div>
                <div className='grid row'>
                    <h3>
                       Lediga tomter
                    </h3>
                    {plots.map((plot: IPlot, index) => {
                        return <PlotRow
                                    key={plot.id + index}
                                    {...plot}
                                />;
                    })}
                </div>
            </div>
        );
    }
}

export default PlotInformation;
