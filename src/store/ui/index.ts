import { UiActionTypes } from "./types";
export const pageLoaded = {
	type: UiActionTypes.PAGE_LOADED
};

export const setLoading = (isLoading: Boolean) => ({
    type: isLoading ? UiActionTypes.SET_LOADING_ON : UiActionTypes.SET_LOADING_OFF,
    payload: isLoading,
});


