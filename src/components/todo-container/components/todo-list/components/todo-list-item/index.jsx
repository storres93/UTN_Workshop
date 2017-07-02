import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';

import './main.scss';
export default class TodoListItem extends Component {
	static propTypes = {
		todo: PropTypes.object,
		toggleCheck: PropTypes.func,
	};

	static defaultProps = {
		todo: null,
		toggleCheck: null
	};

	render() {
		return <div className="todo-item__container">
			<input type='checkbox' checked={`${this.props.todo.checked ? 'checked' : ''}`} onChange={ this.props.toggleCheck }/><span className={`todo-item__label ${this.props.todo.checked ? 'todo-item__label--checked' : ''}`}> { this.props.todo.text } </span>
		</div>;
	}
}
