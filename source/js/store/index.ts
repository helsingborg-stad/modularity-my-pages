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

// save state to localStorage
const localStorageMiddleware = ({ getState }) => {
    return (next: (arg0: any) => void) => (action: any) => {
        const result = next(action);
        localStorage.setItem("applicationState", JSON.stringify(getState()));
        return result;
    };
};

// get state from localStorage if it exists to update current state.
const rehydrateStore = () => {
    if (localStorage.getItem("applicationState") !== null) {
        return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
    }
};

const store: Redux.Store<IRootState> = Redux.createStore(
    rootReducer,
    rehydrateStore(),
    Redux.applyMiddleware(thunk, localStorageMiddleware)
);

export default store;
