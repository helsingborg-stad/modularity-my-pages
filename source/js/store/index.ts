import * as Redux from "redux";
import thunk from "redux-thunk";
import { IUserState } from "./user/types";
import { userReducer } from "./user/reducer";
import { formReducer } from "./Form/reducer";
import { IFormStructure } from "./Form/types";

export interface IRootState {
    formStructure: IFormStructure;
    user: IUserState;
}

const rootReducer = Redux.combineReducers<IRootState>({
    formStructure: formReducer,
    user: userReducer,
});

const store: Redux.Store<IRootState> = Redux.createStore(
    rootReducer,
    Redux.applyMiddleware(thunk)
);

export default store;
