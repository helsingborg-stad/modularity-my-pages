/*
plots data is hardcoded in json right now as a placeholder,
so when the plot api is ready this service needs to be finished.
*/

import plots from "../assets/json/plots.json";

export interface IPlot {
    id: string;
    poperty_name: string;
    area_name: string;
    plot_size: string;
    price: number;
    available: boolean;
}

export function getPlots(): IPlot[] {
    return plots;
}

export function getPlot(id: string): IPlot {
    const allPlots = getPlots();
    const plot = allPlots.filter(x => x.id === id);
    return plot[0];
}
