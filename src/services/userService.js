import http from '../http';
import * as userActions from '../actions/userActions';

export const searchService = term => (dispatch) => {
  dispatch(userActions.loadStart());
  return http.get('/v1/search', {
    params: {
      query: term,
    },
  })
    .then((response) => {
      dispatch(userActions.loadSearchData(response.data.items.slice(0, 10)));
      dispatch(userActions.loadEnd());
    })
    .catch((error) => {
      dispatch(userActions.throwError('Sorry! Something went wrong.'));
      dispatch(userActions.loadEnd());
    });
};

export const recommendationService = itemId => (dispatch) => {
  dispatch(userActions.loadStart());
  return http.get('/v1/nbp', {
    params: {
      itemId,
    },
  })
    .then((response) => {
      dispatch(userActions.loadRecommendations(response.data.slice(0, 10)));
      dispatch(userActions.loadEnd());
    })
    .catch((error) => {
      dispatch(userActions.throwError('Sorry! Something went wrong.'));
      dispatch(userActions.loadEnd());
    });
};

export const detailsService = itemId => (dispatch) => {
  dispatch(userActions.loadStart());
  return http.get(`/v1/items/${itemId}`, {})
    .then((response) => {
      dispatch(userActions.loadDetails(response.data));
      dispatch(userActions.loadEnd());
    })
    .catch((error) => {
      dispatch(userActions.throwError('Sorry! Something went wrong.'));
      dispatch(userActions.loadEnd());
    });
};
