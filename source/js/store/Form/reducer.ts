import { Const, IFormStructure } from './types';
import { Action } from './actions';

const init: IFormStructure = {
    loading: false,
    structure: {
        configuration: [],
        service_description: '',
        service_heading: '',
        service_response: false,
        state: false
    }
};

 export function formReducer(state: IFormStructure = init, action: Action): IFormStructure {
    switch (action.type) {
      case Const.FORM_REQ:
        return {
            ...state,
            loading: action.value
        }
      case Const.FORM_FAIL:
        return {
            ...state,
            loading: false,
        }
      case Const.FORM_SUC:
        return {
            ...state,
            structure: {...action.value}
        };
      default:
        return state;
    }
}