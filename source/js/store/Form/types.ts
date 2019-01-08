export interface IFormState {
    formState: string;
    formStructure: FormStructure;
}

export interface FormStructure {
    configuration: FormElement[];
    service_description: string;
    service_heading: string;
    service_response: boolean;
    state: boolean;
}

export interface EditedForm {
    textInputs: TextInput[];
    textAreas: TextArea[];
}

export interface TextInput {
    id: string;
    value: string;
}

export interface TextArea {
    id: string;
    value: string;
}

export interface FormElement {
    label: string;
    key: string;
    instructions: string;
    statement: string;
    required: boolean;
    type: string;
    options?: OptionsObject[];
    heading?: string;
    button_text?: string;
    value?: string;
    content?: string;
}

export interface OptionsObject {
    label: string;
    value: string;
    active: boolean;
}

export interface FormRequest {
    endUserIp: string;
    moduleId: string;
}

export enum Const {
    FORM_REQ = "FORM_REQUEST",
    FORM_FAIL = "FORM_FAILURE",
    FORM_SUC = "FORM_SUCCESS",
    FORM_EDIT = "FORM_EDIT",
    FORM_POST = "FORM_POST",
    FORM_POST_SUC = "FORM_POST_SUC",
}
