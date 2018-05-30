import * as actionTypes from '../actions/userActions';

const initialState = {
  loading: false,
  items: [],
  recommendations: [],
  details: {},
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case actionTypes.LOAD_END:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        items: action.result,
      };
    case actionTypes.RECOMMENDATION:
      return {
        ...state,
        recommendations: action.result,
      };
    case actionTypes.DETAILS:
      return {
        ...state,
        details: action.result,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.result,
      };
    default:
      return state;
  }
};

export default reducer;
