import React, {
	Component
} from 'react';

export default class TodoListItem extends Component {
	static defaultProps = {
		todo: '',
		checked: false
	};

	constructor(props) {
		super(props);
	}

	render() {
		return <div>
			<input type="checkbox"/><span> { this.props.todo } </span>
		</div>
	}
}