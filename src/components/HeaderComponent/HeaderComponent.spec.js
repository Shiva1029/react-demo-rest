/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from './HeaderComponent';

let wrapper;

describe('Header Component', () => {
  it('should render to the Wrapper', () => {
    wrapper = shallow(<HeaderComponent/>);
    expect(wrapper.find('div.header').length)
      .toBe(1);
  });
});
