import { UiActionTypes } from "../store/ui/types";
import uiMiddleware from "../store/ui/middleware"

describe('UI MIDDLEWARE', () => {
	describe('PAGE LOADED FLOW', () => {
		const [pageLoadedFlow] = uiMiddleware;
		const log = jest.fn();
		const dispatch = jest.fn();
		const next = jest.fn();
		const action = {
			type: UiActionTypes.PAGE_LOADED
		}

		it('Passes action to next middleware', () => {
			pageLoadedFlow({ log })({ dispatch })(next)(action)
			expect(next).toHaveBeenCalledWith(action);
		})

		it('Calls log with correct argument', () => {
			pageLoadedFlow({ log })({ dispatch })(next)(action)
			expect(log).toHaveBeenCalledWith('page loaded')
		})
	})
})