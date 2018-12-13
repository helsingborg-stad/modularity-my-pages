import { combineReducers, createStore, applyMiddleware } from 'redux';
import { demoReducer } from './demo/reducer';
import { personReducer } from './person/reducer';
import thunk from 'redux-thunk';
var rootReducer = combineReducers({
    demo: demoReducer,
    person: personReducer
});
var store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
//# sourceMappingURL=index.js.map