/*eslint-disable*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import DetailsComponent from './DetailsComponent';

describe('Details Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DetailsComponent loading={false} recommendations={[{ itemId: 1 }, { itemId: 2 }]} details={{ name: 'test', itemId: 1 }} message=""/>);
  });

  it('should render to the Wrapper', () => {
    expect(wrapper.find('div.recommendationsMain').length)
      .toBe(1);
  });

  it('should render details', () => {
    const dom = mount(<MemoryRouter><DetailsComponent loading={false} recommendations={[{ itemId: 1 }, { itemId: 2 }]} details={{ name: 'test', itemId: 1 }} message=""/></MemoryRouter>);
    expect(dom.find('div.container').length)
      .toBe(1);
    expect(dom.find('h2')
      .text())
      .toBe('test');
  });

  it('should render recommendations', () => {
    expect(wrapper.find('div.recommendations').length)
      .toBe(2);
  });

  it('should show spinner and hide details, error and recommendations', () => {
    wrapper = shallow(<DetailsComponent loading={true} recommendations={[{ itemId: 1 }, { itemId: 2 }]} details={{ name: 'test', itemId: 1 }} message=""/>);
    expect(wrapper.find('div.spinnerContainer').length)
      .toBe(1);
    expect(wrapper.find('div.recommendationsMain').length)
      .toBe(0);
    expect(wrapper.find('div.container').length)
      .toBe(0);
    expect(wrapper.find('div.errorMessage').length)
      .toBe(0);
  });

  it('should show error message', () => {
    wrapper = shallow(<DetailsComponent loading={false} recommendations={[{ itemId: 1 }, { itemId: 2 }]} details={{ name: 'test', itemId: 1 }} message="error"/>);
    const dom = mount(<MemoryRouter><DetailsComponent loading={false} recommendations={[{ itemId: 1 }, { itemId: 2 }]} details={{ name: 'test' }} message="error"/></MemoryRouter>);
    expect(dom.find('div.errorMessage').length)
      .toBe(1);
    expect(dom.find('div.errorMessage')
      .text())
      .toBe('* error');
  });

  it('should hide details and recommendations when empty', () => {
    wrapper = shallow(<DetailsComponent loading={false} recommendations={[]} details={{}} message=""/>);
    expect(wrapper.find('div.recommendationsMain').length)
      .toBe(0);
    expect(wrapper.find('div.container').length)
      .toBe(0);
  });
});
