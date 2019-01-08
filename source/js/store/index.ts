import * as Redux from "redux";
import thunk from "redux-thunk";
import { IUserState } from "./user/types";
import { userReducer } from "./user/reducer";
import { formReducer } from "./Form/reducer";
import { IFormState } from "./Form/types";

export interface IRootState {
    form: IFormState;
    user: IUserState;
}

const rootReducer = Redux.combineReducers<IRootState>({
    form: formReducer,
    user: userReducer,
});

const store: Redux.Store<IRootState> = Redux.createStore(
    rootReducer,
    Redux.applyMiddleware(thunk)
);

export default store;
