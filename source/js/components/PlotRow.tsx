import * as React from "react";
import { IPlot } from "../services/PlotsService";

interface IProps {
    Plot: IPlot;
    showDetailPage: any;
}

const PlotRow = (props: IProps) => {
    const { poperty_name, plot_size, price, available } = props.Plot;

    return (
        <tr
            onClick={available ? () => props.showDetailPage(props.Plot) : null}
            className={available ? "availablePlot" : ""}
        >
            <td>{poperty_name}</td>
            <td>{plot_size} m2</td>
            <td>{price.toLocaleString()} kr</td>
        </tr>
    );
};

export default PlotRow;
