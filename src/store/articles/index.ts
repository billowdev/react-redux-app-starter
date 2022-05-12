import { ArticlesActionTypes } from "./types";

export const fetchArticles = {
	type: ArticlesActionTypes.FETCH_ARTICLES,
}

export const fetchArticlesRecieved = (resp: Object) => ({
	type: ArticlesActionTypes.FETCH_ARTICLES_RECIEVED,
	payload: resp,
});

export const fetchArticlesError = (error: any) => ({
	type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
	payload: error,
});


