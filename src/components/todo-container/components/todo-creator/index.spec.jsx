import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { TodoCreator } from './index.jsx';

describe('<TodoCreator />', () => {
	it('Renders a container', () => {
		expect(shallow(<TodoCreator />).find('.todo-creator__container').length).to.equal(1);
	});

	it('simulates click events', () => {
		const createTodo = sinon.spy();
		const updateTodo = sinon.spy();
		const wrapper = shallow((<TodoCreator createTodo={createTodo} updateTodo={updateTodo}/>));
		wrapper.find('button').simulate('click');
		expect(createTodo).to.have.property('callCount', 1);
		expect(updateTodo).to.have.property('callCount', 1);
	});
});
