import { FETCH_STUDENTS } from '../actions';

export default function (state = {data: []}, action) {
    console.log("reducer")
    console.log(action)
  switch (action.type) {
    case "FETCH_STUDENTS_FULFILLED":
      const data = action.payload.data;
      return { ...state, data, fetching: false }

    case "FETCH_STUDENTS_PENDING":
      return { ...state , fetching: true}

    case "FETCH_STUDENTS_REJECTED":
      return { ...state , fetching: false}

    default:
      return state;
  }
}