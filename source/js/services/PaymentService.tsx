import axios, { AxiosResponse } from "axios";

export interface IOrderCreate {
    totalAmount: number;
    customer: ICustomer;
}

interface ICustomer {
    customerId: string;
    governemntId: string;
    email: string;
    name: IName;
}

interface IName {
    firstName: string;
    lastName: string;
}

export const initializePayment = (parameters: IOrderCreate): void => {
    const host = process.env.API_URL;
    const endpoint = "/payment/";

    const result = axios
        .post(`${host}${endpoint}`, parameters)
        .then((response: AxiosResponse<any>) => {
            if (response.status !== 200) {
                return null;
            } else {
                return response.data;
            }
        });

    console.log(result);
};

/* create order schema
 OrderNumber: Joi.string().min(4).max(50).required(),
    TotalAmount: globalSchema.totalAmount,
    CurrencyCode: globalSchema.currencyCode,
    Customer: Joi.object().keys({
        CustomerId: Joi.string().allow(''),
        GovernmentId: globalSchema.governmentId,
        EmailAddress: Joi.string().email(),
        TaxIdentificationNumber: Joi.string().min(14).max(14),
        Name: Joi.object().keys({
            CompanyName: globalSchema.name,
            Title: Joi.string().min(1).max(10),
            FirstName: globalSchema.name,
            MiddleNames: Joi.string().min(1).max(100),
            LastName: globalSchema.name,
            Suffix: Joi.string().min(1).max(10)
        }),
        HomeTelephone: globalSchema.telephone,
        WorkTelephone: globalSchema.telephone,
        MobileTelephone: globalSchema.telephone
    }),
    BillTo: globalSchema.nameAndAddress,
    ShipTo: globalSchema.nameAndAddress,
    LineItems: globalSchema.lineItems,
    OrderDescription: Joi.string().min(1).max(255),
    PurchaseReference: Joi.string().min(30).max(30)
*/
