import { FETCH_ALL_COURSES } from '../actions/courses.action';

const initState = {
  myCourses : []
}

export default function (state = initState, action) {
  switch (action.type) {
    case "FETCH_ALL_COURSES_FULFILLED":
      const myCourses = action.payload.data;
      return { ...state, myCourses, fetching: false }

    case "FETCH_ALL_COURSES_PENDING":
      return { ...state , fetching: true}

    case "FETCH_ALL_COURSES_REJECTED":
      return { ...state , fetching: false}

    default:
      return state;
  }
}