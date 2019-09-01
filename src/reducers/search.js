import {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure
} from '../actions';

import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const shows = handleActions(
  {
    [getSearchRequest]: () => [],
    [getSearchSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [getSearchRequest]: () => true,
    [getSearchSuccess]: () => false,
    [getSearchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getSearchRequest]: () => null,
    [getSearchFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  shows,
  isLoading,
  error
});
