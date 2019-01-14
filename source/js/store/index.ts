import * as Redux from "redux";
import thunk from "redux-thunk";
import { IUserState } from "./user/types";
import { userReducer } from "./user/reducer";

export interface IRootState {
    user: IUserState;
}

const rootReducer = Redux.combineReducers<IRootState>({
    user: userReducer,
});

const store: Redux.Store<IRootState> = Redux.createStore(
    rootReducer,
    Redux.applyMiddleware(thunk)
);

export default store;
