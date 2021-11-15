import { SET_CLIENT_STATE } from "../types";

export const setClientState = (clientState) => ({
    type: SET_CLIENT_STATE,
    payload: clientState
})