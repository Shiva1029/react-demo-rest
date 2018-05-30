/*eslint-disable*/
import React from 'react';
import { mount } from 'enzyme';
import SpinnerComponent from './SpinnerComponent';

let dom;

describe('Spinner Component', () => {
  it('should render to the DOM', () => {
    dom = mount(<SpinnerComponent/>);
    expect(dom.find(SpinnerComponent).length)
      .toBe(1);
  });
});
