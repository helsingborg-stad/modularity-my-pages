import { Const, FormStructure } from './types';
import { Action } from './actions';

const init: FormStructure = {
    configuration: [],
        service_description: '',
        service_heading: '',
        service_response: false,
        state: false
};

 export function formReducer(state: FormStructure = init, action: Action): FormStructure {
    switch (action.type) {
      case Const.FORM_REQ:
        return {
            ...state,
        }
      case Const.FORM_FAIL:
        return {
            ...state,
        }
      case Const.FORM_SUC:
        return {
            ...state,
            ...action.value
        };
      case Const.FORM_EDIT:
        return {
            ...state,
            ...action.value
        };
      default:
        return state;
    }
}