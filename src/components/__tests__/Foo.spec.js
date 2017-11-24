import React from 'react';
import { shallow } from 'enzyme';

import Foo from '../Foo';

describe('<Foo />', () => {

  it('should render the component', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.text()).toBe('Foo');
  });

});