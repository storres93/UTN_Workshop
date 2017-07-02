import {
	render,
} from 'react-dom';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoReducers from './reducers';
import TodoContainer from './components/todo-container';

import { createLogger } from 'redux-logger';

const logger = createLogger({
	level: 'info',
	collapsed: true,
});

const store = createStore(
	todoReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(logger),
);

render(
	<Provider store={store}>
		<TodoContainer />
	</Provider>,
	document.getElementById('react-app')
);
