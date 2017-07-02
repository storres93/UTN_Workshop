import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fireAddTodo, fireUpdateTodoCreator } from '../../../../actions';

import './main.scss';

export class TodoCreator extends Component {
	static propTypes = {
		todo: PropTypes.string,
		createTodo: PropTypes.func,
		updateTodo: PropTypes.func,
	};

	static defaultProps = {
		todo: '',
		createTodo: null,
		updateTodo: null,
	};

	constructor(props) {
		super(props);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleInputChange(event) {
		this.props.updateTodo(event.target.value);
	}

	handleClick() {
		this.props.createTodo(this.props.todo);
		this.props.updateTodo('');
	}

	render() {
		return <div className='todo-creator__container'>
			<input type='text' className='todo-creator__input' value={ this.props.todo } placeholder='To do' onChange={this.handleInputChange} />
			<button className='todo-creator__button' onClick={this.handleClick}>Agregar To Do</button>
		</div>;
	}
}

function mapStateToProps(state) {
	return {
		todo: state.todoCreator.todo,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateTodo: bindActionCreators(fireUpdateTodoCreator, dispatch),
		createTodo: bindActionCreators(fireAddTodo, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoCreator);
