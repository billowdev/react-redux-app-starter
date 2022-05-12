import * as articlesActions from "../store/articles"
import { ArticlesActionTypes } from "../store/articles/types"
import articlesMiddleware from "../store/articles/middleware"

describe('todos middleware', () => {
	describe('load articles flow', () => {
		const [loadArticlesFlow] = articlesMiddleware;

		const dummyArticles = {
			"data": [
				{
					"type": "dummyArticles",
					"id": "1",
					"attributes": {
						"title": "Hello dummy",
						"body": "The shortest dummyArticles."
					},
					"relationships": {
						"author": {
							"data": {
								"id": "42",
								"type": "people"
							}
						}
					}
				},
			], "included": [
				{
					"type": "people",
					"id": "42",
					"attributes": {
						"name": "dummy"
					}
				}
			]
		}
		const api = {
			articles: {
				getArticles: jest.fn().mockImplementationOnce(() => new Promise((resolve) => resolve([dummyArticles])))
			}
		}
		const dispatch = jest.fn();
		const next = jest.fn();
		const action = {
			type: ArticlesActionTypes.FETCH_ARTICLES
		}

		it('passes action to next middleware', async () => {
			await loadArticlesFlow({ api })({ dispatch })(next)(action);
			expect(next).toHaveBeenCalledWith(action);
		});

		it('calls api.articles.getArticles at least once', async () => {
			await loadArticlesFlow({ api })({ dispatch })(next)(action);
			expect(api.articles.getArticles).toHaveBeenCalled();
		});

		it('calls api.articles.getArticles at least once', async () => {
			await loadArticlesFlow({ api })({ dispatch })(next)(action);
			expect(dispatch).toHaveBeenCalledWith(articlesActions.fetchArticlesRecieved([dummyArticles]));
		})
	})
})