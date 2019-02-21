import axios, { AxiosResponse } from "axios";
import { post } from "./Requests";

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

export interface IFormRequest {
    personalNumber: string;
    inputData: IInputData[];
}

export interface IInputData {
    key: string;
    value: any;
}

export interface ISubmitFormResponse {
    formId: number;
    isSuccess: boolean;
}

export const getFormConfiguration = async (
    moduleId: string
): Promise<IFormConfiguration> => {
    const host = process.env.HOST;
    const endpoint =
        "/wp-json/ModularityMyPages/v1/GetFieldConfiguration/";

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

export const submitFormData = async (
    data: IFormRequest
): Promise<ISubmitFormResponse> => {
    const host = process.env.API_URL;
    const endpoint = "/form/";

    const formResponse = await post(`${host}${endpoint}`, data).then(
        (response: AxiosResponse<ISubmitFormResponse>) => {
            if (response.status !== 200) {
                return null;
            } else {
                return response.data;
            }
        }
    );

    return {
        formId: formResponse.formId,
        isSuccess: true,
    } as ISubmitFormResponse;
};
