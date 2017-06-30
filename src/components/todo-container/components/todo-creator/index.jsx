import React, {
	Component
} from 'react';

import './main.scss';

export default class TodoCreator extends Component {
	static defaultProps = {
		todo: '',
		createTodo: null,
	};

	constructor(props) {
		super(props);

		this.state = {
			...this.props
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			todo: event.target.value
		});
	}

	handleClick() {
		this.state.createTodo(this.state.todo);
		this.setState({
			todo: ''
		});
	}

	render() {
		return <div className='todo-creator__container'>
			<input type='text' className='todo-creator__input' value={ this.state.todo } placeholder='To do' onChange={this.handleInputChange} />
			<button className='todo-creator__button' onClick={this.handleClick}>Agregar To Do</button>
		</div>;
	}
}