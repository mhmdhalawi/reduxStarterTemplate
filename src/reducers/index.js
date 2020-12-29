import { combineReducers } from 'redux';
import addsubReducer from './addsubReducer';
import FetchDataReducer from './FetchDataReducer';

export const rootReducer = combineReducers({
  counter: addsubReducer,
  data: FetchDataReducer,
});
