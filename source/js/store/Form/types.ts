export interface IFormStructure {
    loading: boolean
    structure: FormStructure,
}

export interface FormStructure {
    configuration: Array<FormElement>,
    service_description: string,
    service_heading: string,
    service_response: boolean,
    state: boolean
}

export interface FormElement {
    label: string,
    key: string,
    instructions: string,
    statement: string,
    required: boolean,
    options?: Array<optionsObject>,
    heading?: string,
    button_text?: string
}

export interface optionsObject {
    label: string,
    value: string
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
