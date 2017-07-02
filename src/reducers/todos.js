import mapActionToReducer from 'redux-action-reducer-mapper';

import { findIndex } from 'lodash';

import { ADD_TODO, TOGGLE_TODO, RESET_TODOS, REORDER_TODO, GET_TODOS_RESPONSE } from '../actions';

export default mapActionToReducer({
	'default': [],

	[ADD_TODO]: (state, action) => ([
		...state,
		{
			id: action.payload.id,
			text: action.payload.text,
			checked: false,
		}
	]),

	[TOGGLE_TODO]: (state, action) => {
		return state.map(todo =>
			(todo.id === action.payload.id)
				? { ...todo, checked: !todo.checked }
				: todo
		)
	},

	[RESET_TODOS]: (state, action) => ([]),

	[REORDER_TODO]: (state, action) => {
		const indexToMove = findIndex(state, { id: action.payload.id });
		const nextIndexToMove = (action.payload.up) ? indexToMove - 1 : indexToMove + 1;
		const auxItem = state[nextIndexToMove];

		if(nextIndexToMove >= 0 && nextIndexToMove < state.length) {
			state[nextIndexToMove] = state[indexToMove];
			state[indexToMove] = auxItem;
		}

		return state.map((todo) => (todo));
	},

	[GET_TODOS_RESPONSE]: (state, action) => ([
		...action.payload.todos
	]),
});
