/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import SearchFormComponent from './SearchFormComponent';

let wrapper;
const emptyFunc = ()=> {};
describe('SearchFormComponent Component', () => {

  let wrapper;
  let mockCallback;
  const test = 'test';

  beforeEach(()=>{
    mockCallback = jest.fn();
    wrapper = shallow(<SearchFormComponent onSubmit={mockCallback} onChange={mockCallback} disabled={false} value={test} />);
  });

  it('should render to the Wrapper', () => {
    expect(wrapper.find('input').length)
      .toBe(1);
  });

  it('simulates click events', () => {
    wrapper.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should render input value', () => {
    expect(wrapper.find('input').props().value)
      .toBe(test);
  });

  it('should fire method on keyup', () => {
    wrapper.find('input').simulate('keyup', {key: 'Enter'});
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
