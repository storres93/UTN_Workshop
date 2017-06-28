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

		this.toggleCheck = this.toggleCheck.bind(this);
	}

	render() {
		return <div>
			<input type="checkbox" onChange={ this.toggleCheck }/><span> { this.props.todo } </span>
		</div>
	}
}