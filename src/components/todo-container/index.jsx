import React, {
	Component
} from 'react';

import TodoList from './components/todo-list';
import TodoCreator from './components/todo-creator';

import './main.scss';

export default class TodoContainer extends Component {
	render() {
		return <div className="todo-container">
			<div>
				<TodoList />
			</div>
			<div>
				<TodoCreator />
			</div>
		</div>;
	}
}
