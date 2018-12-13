var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Constants } from './types';
var init = {
    list: [],
    loading: false
};
export function demoReducer(state, action) {
    if (state === void 0) { state = init; }
    switch (action.type) {
        case Constants.ADD_ITEM:
            return __assign({}, state, { list: state.list.concat([action.payload.item]) });
        case Constants.SET_LOADING:
            return __assign({}, state, action.payload);
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map