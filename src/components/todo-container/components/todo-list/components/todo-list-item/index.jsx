import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';

import './main.scss';
export default class TodoListItem extends Component {
	static propTypes = {
		todo: PropTypes.string,
		checked: PropTypes.boolean,
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
			<input type='checkbox' onChange={ this.toggleCheck }/><span className={`todo-item__label ${this.state.checked ? 'todo-item__label--checked' : ''}`}> { this.props.todo } </span>
		</div>;
	}
}
