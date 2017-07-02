import React, {
	Component
} from 'react';

import TodoList from './components/todo-list';
import TodoCreator from './components/todo-creator';
import TodoReset from './components/todo-reset';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { fireGetTodos } from '../../actions';

import './main.scss';

export class TodoContainer extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
	}

	static defaultProps = {
		dispatch: null,
	}

	constructor(props) {
		super(props);

		this.props.dispatch(fireGetTodos());
	}

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

export default connect()(TodoContainer);
