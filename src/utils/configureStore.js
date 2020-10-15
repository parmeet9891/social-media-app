import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './../reducers/rootReducer';

let middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
	middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
	middleware = [...middleware];
}

export default function configureStore(initialState= {}) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);
}

// { this.props.user.currentUser.length > 0 ? <Route exact path = "/feed" component={Feed} /> : <Route exact path="/" component={Signin}/>
// }