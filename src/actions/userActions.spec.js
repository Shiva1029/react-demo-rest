/*eslint-disable*/
import * as userActions from './userActions';

const error = 'Sorry! Something went wrong.';
const products = ['Item1', 'Item2'];
const details = { name: 'item',
description: 'test description'};

describe('userActions', () => {
  it('should search', () => {
    const expectedAction = {
      type: userActions.SEARCH,
      result: products,
    };
    expect(userActions.loadSearchData(products))
      .toEqual(expectedAction);
  });

  it('should start loading', () => {
    const expectedAction = {
      type: userActions.LOAD_START,
    };
    expect(userActions.loadStart())
      .toEqual(expectedAction);
  });

  it('should end loading', () => {
    const expectedAction = {
      type: userActions.LOAD_END,
    };
    expect(userActions.loadEnd())
      .toEqual(expectedAction);
  });

  it('should throw error', () => {
    const expectedAction = {
      type: userActions.ERROR,
      result: error
    };
    expect(userActions.throwError(error))
      .toEqual(expectedAction);
  });

  it('should loads details', () => {
    const expectedAction = {
      type: userActions.DETAILS,
      result: details
    };
    expect(userActions.loadDetails(details))
      .toEqual(expectedAction);
  });

  it('should load recommendations', () => {
    const expectedAction = {
      type: userActions.RECOMMENDATION,
      result: products
    };
    expect(userActions.loadRecommendations(products))
      .toEqual(expectedAction);
  });
});
