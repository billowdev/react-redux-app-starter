import { UiActionTypes } from "./types";

const pageLoadedFlow = ({ log }: any) => ({ dispatch }: any) => (next: any) => (action: any) => {
	next(action);
	if (action.type === UiActionTypes.PAGE_LOADED) {
		log('page loaded');
	}
}

export default [
	pageLoadedFlow
]

