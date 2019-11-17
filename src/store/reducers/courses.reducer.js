import { FETCH_ALL_COURSES_BY_CLASS } from '../actions/courses.action';

const initState = {
  myCoursesByClass : []
}

export default function (state = initState, action) {
  switch (action.type) {
    case "FETCH_ALL_COURSES_BY_CLASS_FULFILLED":
      const myCoursesByClass = action.payload.data;
      return { ...state, myCoursesByClass, fetching: false }

    case "FETCH_ALL_COURSES_BY_CLASS_PENDING":
      return { ...state , fetching: true}

    case "FETCH_ALL_COURSES_BY_CLASS_REJECTED":
      return { ...state , fetching: false}

    default:
      return state;
  }
}