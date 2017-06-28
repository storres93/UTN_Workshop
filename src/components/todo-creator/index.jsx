import React, {
	Component
} from 'react';

export default class TodoCreator extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		alert('Hola mundo');
	}

	render() {
		return <div>
			<input type="text" placeholder="To do" />
			<button onClick={this.handleClick}>Agregar To Do</button>
		</div>;
	}
}