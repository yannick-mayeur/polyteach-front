export default function (state = {data: []}, action) {
  switch (action.type) {
    case "ADD_NEW_COURSE_PENDING":
      return { ...state, fetching: true}
    case "ADD_NEW_COURSE_FULFILLED":
      const data = action.payload;
      return { ...state, data, fetching: false}
    case "ADD_NEW_COURSE_REJECTED":
      return { ...state, fetching: false }

    default:
      return state;
  }
}