import mapActionToReducer from 'redux-action-reducer-mapper';

import { ADD_TODO } from '../actions';

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
});
