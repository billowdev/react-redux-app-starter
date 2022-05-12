import { EnumType } from "typescript";
import { ArticlesActionTypes } from "./types";

const initialState = {
	data: [],
	included: [],
	error: null,
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ArticlesActionTypes.FETCH_ARTICLES_RECIEVED:
			return { data: action.payload.data, included: action.payload.included }
		default:
			return state;
	}
}

export default reducer;