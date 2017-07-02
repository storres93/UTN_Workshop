import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { TodoContainer } from './index.jsx';

describe('<TodoContainer />', () => {
	it('Renders a container', () => {
		expect(shallow(<TodoContainer />).find('.todo-container').length).to.equal(1);
	});
});
