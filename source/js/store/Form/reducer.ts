import { Const, IFormStructure } from './types';
import { Action } from './actions';

const init: IFormStructure = {
    loading: false,
    structure: ''
};

 export function formReducer(state: IFormStructure = init, action: Action): IFormStructure {
    switch (action.type) {
      case Const.FORM_REQ:
      console.log('form req')
        return {
            ...state,
            loading: action.value
        }
      case Const.FORM_FAIL:
      console.log('form failed')
        return {
            ...state,
            loading: false,
        }
      case Const.FORM_SUC:
      console.log('form fetched')
        return {
            ...state,
            structure: action.value
        };
      default:
        return state;
    }
}