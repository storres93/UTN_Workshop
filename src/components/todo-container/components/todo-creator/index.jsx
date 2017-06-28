import React, {
	Component
} from 'react';

export default class TodoCreator extends Component {
	static defaultProps = {
		todo: ''
	};

	constructor(props) {
		super(props);

		this.createTodo = props.createTodo;
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleInputChange(event) {
		this.todo = event.target.value;
		this.forceUpdate();
	}

	handleClick() {
		this.createTodo(this.todo);
		this.todo = '';
		this.forceUpdate();
	}

	render() {
		return <div>
			<input type="text" value={ this.todo } placeholder="To do" onChange={this.handleInputChange} />
			<button onClick={this.handleClick}>Agregar To Do</button>
		</div>;
	}
}