import React, {
	Component
} from 'react';

export default class TodoListItem extends Component {
	static defaultProps = {
		todo: ''
	};

	constructor(props) {
		super(props);

		this.todo = this.props.todo;
	}

	render() {
		return <div>
			<input type="checkbox" /> <span> { this.todo } </span>
		</div>
	}
}