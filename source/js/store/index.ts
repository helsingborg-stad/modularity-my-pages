import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { demoReducer } from './demo/reducer';
import { IDemoState } from './demo/types';
import { IUserState } from './user/types';
import { userReducer } from './user/reducer';
import { formReducer } from './Form/reducer';
import { FormStructure } from './Form/types';

export interface IRootState {
    demo: IDemoState;
    formStructure: FormStructure;
    user: IUserState;
}

const rootReducer = Redux.combineReducers<IRootState>({
    demo: demoReducer,
    formStructure: formReducer,
    user: userReducer,
});

const store: Redux.Store<IRootState> = Redux.createStore(
    rootReducer,
    Redux.applyMiddleware(thunk)
);

export default store;
