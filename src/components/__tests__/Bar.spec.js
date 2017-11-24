import React from 'react';
import { shallow } from 'enzyme';

import Bar from '../Bar';

describe('<Bar />', () => {

  it('should render the component', () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper.text()).toBe('Bar');
  });

});