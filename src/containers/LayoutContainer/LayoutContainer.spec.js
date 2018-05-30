/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import LayoutContainer from './LayoutContainer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

let wrapper;

describe('Layout Container', () => {
  it('should render to the wrapper', () => {
    wrapper = shallow(<LayoutContainer/>);
    expect(wrapper.find(HeaderComponent).length)
      .toBe(1);
    expect(wrapper.find('div.mainContainer').length)
      .toBe(1);
  });

  it('should render children to the wrapper', () => {
    wrapper = shallow(<LayoutContainer>Test</LayoutContainer>);
    expect(wrapper.find('div.mainContainer')
      .text())
      .toEqual('Test');
  });
});
