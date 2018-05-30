/*eslint-disable*/
import userReducer from './userReducer';
import * as actionTypes from '../actions/userActions';

const initialState = {
  loading: false,
  items: [],
  recommendations: [],
  details: {},
  error: '',
};

const error = 'Sorry! Something went wrong.';
const products = ['Item1', 'Item2'];
const details = { name: 'item',
  description: 'test description'};

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should return start loading', () => {
    expect(userReducer(initialState, {
      type: actionTypes.LOAD_START
    }))
      .toEqual({
        loading: true,
        items: [],
        recommendations: [],
        details: {},
        error: '',
      });
  });

  it('should return end loading', () => {
    expect(userReducer(initialState, {
      type: actionTypes.LOAD_END
    }))
      .toEqual({
        loading: false,
        items: [],
        recommendations: [],
        details: {},
        error: '',
      });
  });

  it('should throw error', () => {
    expect(userReducer(initialState, {
      type: actionTypes.ERROR,
      result: error,
    }))
      .toEqual({
        loading: false,
        items: [],
        recommendations: [],
        details: {},
        error,
      });
  });

  it('should load search results', () => {
    expect(userReducer(initialState, {
      type: actionTypes.SEARCH,
      result: products
    }))
      .toEqual({
        loading: false,
        items: products,
        recommendations: [],
        details: {},
        error: '',
      });
  });

  it('should load details', () => {
    expect(userReducer(initialState, {
      type: actionTypes.DETAILS,
      result: details
    }))
      .toEqual({
        loading: false,
        items: [],
        recommendations: [],
        details,
        error: '',
      });
  });

  it('should load recommendations', () => {
    expect(userReducer(initialState, {
      type: actionTypes.RECOMMENDATION,
      result: products
    }))
      .toEqual({
        loading: false,
        items: [],
        recommendations: products,
        details: {},
        error: '',
      });
  });
});
