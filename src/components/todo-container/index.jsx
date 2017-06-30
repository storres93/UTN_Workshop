import React, {
	Component
} from 'react';

import TodoList from './components/todo-list';
import TodoCreator from './components/todo-creator';

import './main.scss';
export default class TodoContainer extends Component {
	static defaultProps = {
		todos: []
	}

	constructor(props) {
		super(props);

		this.createTodo = this.createTodo.bind(this);
		this.state = {
			...this.props
		};
	}

	createTodo(newTodo) {
		if(newTodo === null || newTodo === '') {
			return true;
		}
		const newTodos = this.state.todos;
		newTodos.push(newTodo);

		this.setState({
			todos: newTodos,
		});
	}

	render() {
		return <div className="todo-container">
			<div>
				<TodoList todos={ this.state.todos } />
			</div>
			<div>
				<TodoCreator createTodo={ this.createTodo } />
			</div>
		</div>
	}
}