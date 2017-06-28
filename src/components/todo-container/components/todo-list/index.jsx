import React, {
	Component
} from 'react';

import TodoListItem from './components/todo-list-item';
export default class TodoList extends Component {
	static defaultProps = {
		todos: []
	}

	constructor(props) {
		super(props);

		this.todos = this.props.todos;
	}

	render() {
		var todoItems = this.todos.map((todo) => (
			<TodoListItem todo={ todo } />
		));

		return <div>
			{ todoItems }
		</div>
	}
}