import React, {
	Component
} from 'react';

import TodoListItem from './components/todo-list-item';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fireToggleTodo } from '../../../../actions';

import './main.scss';
export class TodoList extends Component {
	static propTypes = {
		todos: PropTypes.array,
		toggleTodo: PropTypes.func,
	};

	static defaultProps = {
		todos: [],
		toggleTodo: null,
	}

	render() {
		const toggleWrapper = (id) => (() => this.props.toggleTodo(id));
		const todoItems = this.props.todos.map((todo, key) => (
			<TodoListItem key={ key } todo={ todo } toggleCheck={toggleWrapper(todo.id)} />
		));

		return <div className='todo-list__container'>
			<div className='todo-list__header'>
				To Do
			</div>
			<div className='todo-list__list'>
				{ todoItems }
			</div>
		</div>;
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleTodo: bindActionCreators(fireToggleTodo, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoList);
