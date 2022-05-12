import { ArticlesActionTypes } from "./types";
import * as articlesAction from "./";
import * as uiActions from "../ui"

const loadArticlesFlow = ({ api }: any) => ({ dispatch }: any) => (next: any) => async (action: any) => {
	next(action);
	if (action.type === ArticlesActionTypes.FETCH_ARTICLES) {
		try {
			// dispatch(uiActions.setLoading(true));
			const articles = await api.articles.getArticles();
			dispatch(articlesAction.fetchArticlesRecieved(articles))
			// dispatch(uiActions.setLoading(false));
		} catch (err) {
			dispatch(articlesAction.fetchArticlesError(err))
		}
	}
}

export default [loadArticlesFlow];

