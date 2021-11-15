import { SET_CLIENT_STATE } from "../types";

export const clientReducer = (state, {type, payload}) => {
    // Usual stuff with HYDRATE handler
    if (type === SET_CLIENT_STATE) {
        return {
            ...state,
            client: payload
        };
    }
    return state;
};