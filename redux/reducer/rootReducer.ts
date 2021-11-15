import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer";

export interface RootState {
    
}

export const rootReducer = combineReducers({
    clientReducer
});