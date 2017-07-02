import mapActionToReducer from 'redux-action-reducer-mapper';

import { ADD_TODO, TOGGLE_TODO, RESET_TODOS } from '../actions';

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
});
