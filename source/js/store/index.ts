import { combineReducers, createStore, applyMiddleware } from 'redux';
import { demoReducer } from './demo/reducer';
import { IDemoState } from './demo/types';
import { personReducer } from './person/reducer';
import { IPersonState } from './person/types';
import thunk from 'redux-thunk';

export interface IRootState {
    demo: IDemoState,
    person: IPersonState
    
}

const rootReducer = combineReducers({
    demo: demoReducer,
    person: personReducer
});

const store = createStore<IRootState, any, any, any>(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;