import { INCREMENT, DECREMENT, FETCH_DATA } from './types';

export function adding() {
  return {
    type: INCREMENT,
  };
}

export function subtracting() {
  return {
    type: DECREMENT,
  };
}

export function fetch_data() {
  return async (dispatch) => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    console.log('fetching data');
    dispatch({ type: FETCH_DATA, payload: data });
  };
}
