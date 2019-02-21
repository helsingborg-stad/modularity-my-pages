import { AxiosResponse } from "axios";
import { post, get } from "./Requests";

export interface IOrderCreate {
    totalAmount: number;
    personalNumber: string;
}

export interface IConfirmOrderResponse {
    OrderId: number;
    TotalAmount: number;
    Status: number;
    UserId: number;
    ExternalOrderId: string;
}

export const initializePayment = async (
    parameters: IOrderCreate
): Promise<string> => {
    const host = process.env.API_URL;
    const endpoint = "/payment/initialize";

    const data = {
        totalAmount: parameters.totalAmount,
        personalNumber: parameters.personalNumber,
        host: process.env.HOST,
    };

    const result = await post(`${host}${endpoint}`, data).then(
        (response: AxiosResponse<any>) => {
            if (response.status !== 200) {
                return null;
            } else {
                return response.data;
            }
        }
    );

    console.log(result);
    return result.paymentInfo.url;
};

export const confirmPayment = async (
    orderId: string
): Promise<IConfirmOrderResponse> => {
    const host = process.env.API_URL;
    const endpoint = `/payment/confirm/${orderId}`;

    const result = await get(`${host}${endpoint}`).then(
        (response: AxiosResponse<IConfirmOrderResponse>) => {
            if (response.status !== 200) {
                console.log(response.data);
                return null;
            } else {
                return response.data;
            }
        }
    );

    console.log(result);
    return result;
};
