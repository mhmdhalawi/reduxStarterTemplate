import { INCREMENT, DECREMENT } from '../actions/types';

const Initial_state = {
  count: 0,
  name: 'moe',
};

export default function addsubReducer(state = Initial_state, action) {
  const { count } = state;
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: count + 1 };
    case DECREMENT:
      return { ...state, count: count - 1 };
    default:
      return state;
  }
}
