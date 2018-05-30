/*eslint-disable*/
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import http from  '../http';
import moxios from 'moxios';
import * as userActions from '../actions/userActions';
import * as userService from './userService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  loading: false,
  items: [],
  recommendations: [],
  details: {},
  error: '',
};
const itemId = 1;
const error = 'Sorry! Something went wrong.';
const products = ['Item1', 'Item2'];
const details = { name: 'item',
  description: 'test description'};
const term = 'xbox';

describe('userService', () => {

  beforeEach(function () {
    moxios.install(http);
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('Load Search Results Succesfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {items: products},
      });
    });

    const expectedActions = [
      userActions.loadStart(),
      userActions.loadSearchData(products),
      userActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(userService.searchService(term)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Search Fails', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: {},
      });
    });

    const expectedActions = [
      userActions.loadStart(),
      userActions.throwError(error),
      userActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(userService.searchService(term)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Load Details Succesfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: details,
      });
    });

    const expectedActions = [
      userActions.loadStart(),
      userActions.loadDetails(details),
      userActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(userService.detailsService(itemId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Details Fails', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: {},
      });
    });

    const expectedActions = [
      userActions.loadStart(),
      userActions.throwError(error),
      userActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(userService.detailsService(itemId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Load Recommendations Succesfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: products,
      });
    });

    const expectedActions = [
      userActions.loadStart(),
      userActions.loadRecommendations(products),
      userActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(userService.recommendationService(itemId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Recommendation Fails', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: {},
      });
    });

    const expectedActions = [
      userActions.loadStart(),
      userActions.throwError(error),
      userActions.loadEnd()
    ];

    const store = mockStore(initialState);

    return store.dispatch(userService.recommendationService(itemId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
