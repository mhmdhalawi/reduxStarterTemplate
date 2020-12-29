import { FETCH_DATA } from '../actions/types';

export default function fetchDataReducer(state = '', action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, info: action.payload };
    default:
      return state;
  }
}
