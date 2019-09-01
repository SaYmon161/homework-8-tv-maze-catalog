import { getShowRequest, getShowSuccess, getShowFailure } from '../actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const show = handleActions(
  {
    [getShowRequest]: () => {},
    [getShowSuccess]: (_state, action) => action.payload
  },
  {}
);

const isLoading = handleActions(
  {
    [getShowRequest]: () => true,
    [getShowSuccess]: () => false,
    [getShowFailure]: () => false
  },
  true
);

const error = handleActions(
  {
    [getShowRequest]: () => null,
    [getShowFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  show,
  isLoading,
  error
});
