import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';

import './main.scss';
export default class TodoListItem extends Component {
	static propTypes = {
		todo: PropTypes.object,
		toggleCheck: PropTypes.func,
		reorderTodo: PropTypes.func,
	};

	static defaultProps = {
		todo: null,
		toggleCheck: null,
		reorderTodo: null,
	};

	constructor(props) {
		super(props);

		this.reorderUp = this.reorderUp.bind(this);
		this.reorderDown = this.reorderDown.bind(this);
	}

	reorderUp() {
		this.props.reorderTodo(this.props.todo.id, true);
	}

	reorderDown() {
		this.props.reorderTodo(this.props.todo.id, false);
	}

	render() {
		return <div className="todo-item__container">
			<div>
				<input type='checkbox' checked={`${this.props.todo.checked ? 'checked' : ''}`} onChange={ this.props.toggleCheck }/><span className={`todo-item__label ${this.props.todo.checked ? 'todo-item__label--checked' : ''}`}> { this.props.todo.text } </span>
			</div>
			<div>
				<button onClick={ this.reorderUp }>Subir</button>
				<button onClick={ this.reorderDown }>Bajar</button>
			</div>
		</div>;
	}
}
