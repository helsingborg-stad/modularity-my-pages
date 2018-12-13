import { action } from 'typesafe-actions';
import { Constants } from './types';
export function addItemToList(item) {
    return action(Constants.ADD_ITEM, {
        item: item
    });
}
export function setLoading(loading) {
    return action(Constants.SET_LOADING, {
        loading: loading
    });
}
//# sourceMappingURL=actions.js.map