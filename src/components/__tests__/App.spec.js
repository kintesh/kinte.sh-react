import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {

  it('should render the component', () => {
    const wrapper = shallow(<App><br/></App>);
    expect(wrapper.find('Nav')).toHaveLength(1);
    expect(wrapper.find('hr')).toHaveLength(1);
  });

  it('should render children component', () => {
    const wrapper = shallow(<App><div>child component</div></App>);
    expect(wrapper.text()).toContain('child component');
  });

});