import { UiActionTypes } from "./types";

const initialState = {
    loading: true
}

export default (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case (UiActionTypes.SET_LOADING_ON):
        case (UiActionTypes.SET_LOADING_OFF):
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}