import plots from '../assets/json/plots.json';

export interface IPlot {
    id: string;
    poperty_name: string;
    plot_size: string;
    price: number;
    available: boolean;
}

export function getPlots(): IPlot[] {
    return plots;
}
