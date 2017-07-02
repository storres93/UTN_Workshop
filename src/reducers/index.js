import { combineReducers } from 'redux'
import todos from './todos'
import todoCreator from './todoCreator';

const todoApp = combineReducers({
	todos,
	todoCreator,
})

export default todoApp
