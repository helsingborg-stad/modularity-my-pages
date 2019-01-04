import * as React from 'react';
import { IPlot } from '../../services/PlotsService';
import { Link } from 'react-router-dom';

const PlotRow = (props: IPlot) => {

    const { poperty_name, plot_size, price, available } = props;

    return (
        available ? <Link
            to={{
            pathname: '/tomt/' + props.id,
            state: {
                plot: props,
                },
            }}
        >
            <div className={'grid ' + (available ? 'availablePlot' : '')}>
                <div className='grid-md-4'>{poperty_name}</div>
                <div className='grid-md-4'>{plot_size} m2</div>
                <div className='grid-md-4'>{price.toLocaleString()} kr</div>
            </div>
        </Link>
        :
        <div className={'grid ' + (available ? 'availablePlot' : '')}>
            <div className='grid-md-4'>{poperty_name}</div>
            <div className='grid-md-4'>{plot_size} m2</div>
            <div className='grid-md-4'>{price.toLocaleString()} kr</div>
        </div>
    );
};

export default PlotRow;
