import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';

import './main.scss';
export default class TodoListItem extends Component {
	static propTypes = {
		todo: PropTypes.object,
		checked: PropTypes.bool,
	};

	static defaultProps = {
		todo: null,
		checked: false
	};

	constructor(props) {
		super(props);

		this.toggleCheck = this.toggleCheck.bind(this);
		this.state = {
			...props
		};
	}

	toggleCheck() {
		this.setState({
			checked: !this.state.checked
		});
	}

	render() {
		return <div className="todo-item__container">
			<input type='checkbox' checked={`${this.props.todo.checked ? 'checked' : ''}`} onChange={ this.toggleCheck }/><span className={`todo-item__label ${this.props.todo.checked ? 'todo-item__label--checked' : ''}`}> { this.props.todo.text } </span>
		</div>;
	}
}
