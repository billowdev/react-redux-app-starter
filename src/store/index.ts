import { compose, applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers"
import middlewares from "./middlewares"
import { composeWithDevTools } from 'redux-devtools-extension'
import config from "../config"
import services from "../services";

// apply middleware
const composedMiddleware = applyMiddleware(...middlewares.map(f => f(services)))

// enhancer 
const composeEnhancers =
	config.env === 'development' &&
	composeWithDevTools(composedMiddleware) ||
	compose(composedMiddleware)
	
// create store
export const configureStore = createStore(
	rootReducers, {},
	composeEnhancers
);

