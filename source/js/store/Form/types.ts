export interface IFormStructure {
    loading: boolean
    structure: string,
}

export interface FormRequest {
    endUserIp: string,
    moduleId: string,
}

export enum Const {
    FORM_REQ = 'FORM_REQUEST',
    FORM_FAIL = 'FORM_FAILURE',
    FORM_SUC = 'FORM_SUCCESS'
}
