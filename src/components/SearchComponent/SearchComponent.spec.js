/*eslint-disable*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SearchComponent from './SearchComponent';

describe('Search Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchComponent loading={false} results={[{ itemId: 1, name: 'test1' }, { itemId: 2, name: 'test2' }]} message=""/>);
  });

  it('should render to the Wrapper', () => {
    expect(wrapper.find('div.container').length)
      .toBe(1);
  });

  it('should render results', () => {
    const dom = mount(<MemoryRouter><SearchComponent loading={false} results={[{ itemId: 1, name: 'test1' }, { itemId: 2, name: 'test2' }]} message=""/></MemoryRouter>);
    expect(dom.find('div.result').length)
      .toBe(2);
    expect(dom.find('h4').first().text())
      .toBe('test1');
  });

  it('should show spinner, hide results and error message ', () => {
    wrapper = shallow(<SearchComponent loading={true} results={[{ itemId: 1, name: 'test1' }, { itemId: 2, name: 'test2' }]} message=""/>);
    expect(wrapper.find('div.spinnerContainer').length)
      .toBe(1);
    expect(wrapper.find('div.result').length)
      .toBe(0);
    expect(wrapper.find('div.errorMessage').length)
      .toBe(0);
  });

  it('should show error message and hide results', () => {
    const dom = mount(<MemoryRouter><SearchComponent loading={false} results={[{ itemId: 1, name: 'test1' }, { itemId: 2, name: 'test2' }]} message="error"/></MemoryRouter>);
    expect(dom.find('div.errorMessage').length)
      .toBe(1);
    expect(dom.find('div.errorMessage')
      .text())
      .toBe('* error');
  });

  it('should hide details and recommendations when empty', () => {
    wrapper = shallow(<SearchComponent loading={false} results={[]} message=""/>);
    expect(wrapper.find('div.result').length)
      .toBe(0);
  });
});
