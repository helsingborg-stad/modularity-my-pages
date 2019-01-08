import { Const, IFormState } from "./types";
import { Action } from "./actions";

const init: IFormState = {
    formState: "",
    formStructure: {
        configuration: [],
        service_description: "",
        service_heading: "",
        service_response: false,
        state: false,
    },
};

export function formReducer(
    state: IFormState = init,
    action: Action
): IFormState {
    switch (action.type) {
        case Const.FORM_REQ:
            return {
                ...state,
                formState: "fetching form",
            };
        case Const.FORM_FAIL:
            return {
                ...state,
                formState: "failed",
            };
        case Const.FORM_SUC:
            return {
                ...state,
                formStructure: { ...action.value },
                formState: "fetched form",
            };
        case Const.FORM_EDIT:
            return {
                ...state,
                formStructure: { ...action.value },
                formState: "dataEdited",
            };
        case Const.FORM_POST:
            return {
                ...state,
                formState: "savingForm",
            };
        case Const.FORM_POST_SUC:
            return {
                ...state,
                formState: "savedForm",
            };
        default:
            return state;
    }
}
