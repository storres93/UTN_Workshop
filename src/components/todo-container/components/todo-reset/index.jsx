import React, {
	Component
} from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fireResetTodos } from '../../../../actions';

import './main.scss';

export class TodoReset extends Component {
	static propTypes = {
		resetTodos: PropTypes.func,
	};

	static defaultProps = {
		resetTodos: null,
	};

	render() {
		return <div className='todo-reset__container'>
			<button className='todo-reset__button' onClick={this.props.resetTodos}>Borrar todos</button>
		</div>;
	}
}

function mapDispatchToProps(dispatch) {
	return {
		resetTodos: bindActionCreators(fireResetTodos, dispatch),
	};
}

export default connect(
	null,
	mapDispatchToProps,
)(TodoReset);
