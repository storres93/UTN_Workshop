import React, {
	Component
} from 'react';

import TodoList from './components/todo-list';
import TodoCreator from './components/todo-creator';

export default class TodoContainer extends Component {
	static defaultProps = {
		todos: []
	}

	constructor(props) {
		super(props);

		this.createTodo = this.createTodo.bind(this);
		this.todos = this.props.todos;
	}

	createTodo(newTodo) {
		this.todos.push(newTodo);
		this.forceUpdate();
	}

	render() {
		return <div>
			<div>
				<TodoList todos={ this.todos } />
			</div>
			<div>
				<TodoCreator createTodo={ this.createTodo } />
			</div>
		</div>
	}
}