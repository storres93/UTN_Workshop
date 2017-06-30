import React, {
	Component
} from 'react';

import TodoListItem from './components/todo-list-item';

import './main.scss'
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

		return <div className='todo-list__container'>
			<div className='todo-list__header'>
				To Do
			</div>
			<div className='todo-list__list'>
				{ todoItems }
			</div>
		</div>
	}
}