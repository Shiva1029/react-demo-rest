/*eslint-disable*/
import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import DetailsContainer from './DetailsContainer';

const middlewares = [thunk];
const initialState = {
  user: {
    loading: false,
    items: [],
    recommendations: [],
    details: {},
    error: '',
  }
};

const mockStore = configureStore(middlewares);
let dom;
let store;

describe('Details Container', () => {

  it('should render', () => {
    store = mockStore(initialState);
    dom = mount(<MemoryRouter><DetailsContainer store={store}/></MemoryRouter>);
    expect(dom.find('input').length)
      .toBe(1);
  });
});
