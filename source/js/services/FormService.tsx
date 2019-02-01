import axios, { AxiosResponse } from "axios";

export interface IFormConfiguration {
    configuration: IField[];
    service_description: string;
    service_heading: string;
    service_response: boolean;
    state: boolean;
}

export interface IField {
    label: string;
    key: string;
    instructions: string;
    statement: string;
    required: boolean;
    type: string;
    options?: IOption[];
    heading?: string;
    button_text?: string;
    value?: string;
    content?: string;
}

export interface IOption {
    label: string;
    value: string;
    active: boolean;
}

export const getFormConfiguration = async (
    moduleId: string
): Promise<IFormConfiguration> => {
    const host = process.env.HOST;
    const endpoint =
        "/wordpress/wp-json/ModularityMyPages/v1/GetFieldConfiguration/";

    const form = await axios
        .get(`${host}${endpoint}${moduleId}`)
        .then((response: AxiosResponse<IFormConfiguration>) => {
            if (response.status !== 200) {
                return null;
            } else {
                return response.data;
            }
        });

    return form;
};
