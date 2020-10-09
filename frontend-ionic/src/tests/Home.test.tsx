import React from 'react';
import Home from '../pages/Home';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

//Bringing personal training to your home

test('page should have a title of Ionic React Todos', async () => {
	const wrapper = shallow(<Home />,
		{wrappingComponent: Provider}
		
		);
	//expect(wrapper.matchesElement(<h1>Bringing personal training to your home</h1>)).toBeDefined
	expect (wrapper.contains(<h1>
		
	</h1>))
	});