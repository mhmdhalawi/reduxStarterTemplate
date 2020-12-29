import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import addsubReducer from './reducers/addsubReducer';
import FetchDataReducer from './reducers/FetchDataReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: addsubReducer,
  data: FetchDataReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middleware)));

export default store;
