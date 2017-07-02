import React, {
	Component
} from 'react';

import TodoList from './components/todo-list';
import TodoCreator from './components/todo-creator';
import TodoReset from './components/todo-reset';
import './main.scss';

export default class TodoContainer extends Component {
	render() {
		return <div className="todo-container">
			<div>
				<TodoReset />
			</div>
			<div>
				<TodoList />
			</div>
			<div>
				<TodoCreator />
			</div>
		</div>;
	}
}
