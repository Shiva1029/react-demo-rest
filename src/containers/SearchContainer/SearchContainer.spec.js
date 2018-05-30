/*eslint-disable*/
import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SearchContainer from './SearchContainer';

const initialState = {
  user: {
    loading: false,
    items: [],
    recommendations: [],
    details: {},
    error: '',
  }
};

const mockStore = configureStore();
let dom;
let store;

describe('Search Container', () => {

  it('should render', () => {
    store = mockStore(initialState);
    dom = mount(<MemoryRouter><SearchContainer store={store}/></MemoryRouter>);
    expect(dom.find('div.homeContainer').length)
      .toBe(1);
  });
});
