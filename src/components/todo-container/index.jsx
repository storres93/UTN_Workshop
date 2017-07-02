import React, {
	Component
} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from './components/todo-list';
import TodoCreator from './components/todo-creator';

import PropTypes from 'prop-types';

import './main.scss';

import { fireAddTodo } from '../../actions';

export class TodoContainer extends Component {
	static propTypes = {
		todos: PropTypes.array,
		fireAddTodo: PropTypes.func,
	};

	static defaultProps = {
		todos: []
	};

	constructor(props) {
		super(props);

		this.createTodo = this.createTodo.bind(this);
	}

	createTodo(newTodo) {
		this.props.fireAddTodo(newTodo);
	}

	render() {
		return <div className="todo-container">
			<div>
				<TodoList todos={ this.props.todos } />
			</div>
			<div>
				<TodoCreator createTodo={ this.createTodo } />
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
		fireAddTodo: bindActionCreators(fireAddTodo, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoContainer);
