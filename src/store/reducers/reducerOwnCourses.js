import { FETCH_OWN_COURSES } from '../actions/index';

export default function (state = {data: []}, action) {
  switch (action.type) {
    case FETCH_OWN_COURSES:
      const data = action.payload.data;
      return { ...state, data }
    default:
      return state;
  }
}