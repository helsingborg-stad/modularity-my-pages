import * as React from 'react';
import { IPlot } from '../../services/PlotsService';

const PlotRow = (props: IPlot) => {

    const { poperty_name, plot_size, price, available } = props;

    return (
        <div className={'grid ' + (available ? 'availablePlot' : '')}>
            <div className='grid-md-4'>{poperty_name}</div>
            <div className='grid-md-4'>{plot_size} m2</div>
            <div className='grid-md-4'>{price.toLocaleString()} kr</div>
        </div>
    );
};

export default PlotRow;
