import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { demoReducer } from './demo/reducer';
import { IDemoState } from './demo/types';
import { personReducer } from './person/reducer';
import { IPersonState } from './person/types';
import { IUserState } from './user/types';
import { userReducer } from './user/reducer';

export interface IRootState {
    demo: IDemoState,
    person: IPersonState
    user: IUserState
}

const rootReducer = Redux.combineReducers<IRootState>({
    demo: demoReducer,
    person: personReducer,
    user: userReducer
});

const store: Redux.Store<IRootState> = Redux.createStore(
    rootReducer,
    Redux.applyMiddleware(thunk)
);

export default store;