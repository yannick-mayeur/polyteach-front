import { FETCH_OWN_COURSES } from '../actions';

export default function (state = {data: []}, action) {
  switch (action.type) {
    case "FETCH_OWN_COURSES_FULFILLED":
      const data = action.payload.data;
      return { ...state, data, fetching: false }

    case "FETCH_OWN_COURSES_PENDING":
      return { ...state , fetching: true}

    case "FETCH_OWN_COURSES_REJECTED":
      return { ...state , fetching: false}

    default:
      return state;
  }
}