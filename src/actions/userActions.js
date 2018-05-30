export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const SEARCH = 'SEARCH';
export const DETAILS = 'DETAILS';
export const RECOMMENDATION = 'RECOMMENDATION';
export const ERROR = 'ERROR';

export const loadSearchData = products => ({
  type: SEARCH,
  result: products,
});

export const loadRecommendations = products => ({
  type: RECOMMENDATION,
  result: products,
});

export const loadDetails = details => ({
  type: DETAILS,
  result: details,
});

export const loadStart = () => ({
  type: LOAD_START,
});

export const loadEnd = () => ({
  type: LOAD_END,
});

export const throwError = error => ({
  type: ERROR,
  result: error,
});
