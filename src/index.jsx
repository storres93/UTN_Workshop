import {
	render,
} from 'react-dom';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoContainer from './components/todo-container';

const store = createStore(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<Provider store={store}>
		<TodoContainer />
	</Provider>,
	document.getElementById('react-app')
);
