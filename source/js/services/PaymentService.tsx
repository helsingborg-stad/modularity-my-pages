import { AxiosResponse } from "axios";
import { post } from "./Requests";

export interface IOrderCreate {
    totalAmount: number;
}

export const initializePayment = async (
    parameters: IOrderCreate
): Promise<string> => {
    const host = process.env.API_URL;
    const endpoint = "/payment/initialize";

    const data = {
        totalAmount: parameters.totalAmount,
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
