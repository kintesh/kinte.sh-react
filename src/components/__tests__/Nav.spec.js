import React from 'react';
import { shallow } from 'enzyme';

import Nav from '../Nav';

describe('<Nav />', () => {

  it('should render the component', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('Link')).toHaveLength(3);
  });

});