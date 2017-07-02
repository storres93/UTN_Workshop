import mapActionToReducer from 'redux-action-reducer-mapper';

import { UPDATE_TODO_CREATOR } from '../actions';

export default mapActionToReducer({
	'default': {},

	[UPDATE_TODO_CREATOR]: (state, action) => ({
		todo: action.payload.text,
	}),
});
