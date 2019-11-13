export default function (state = { data: [] }, action) {
  switch (action.type) {
    case "FETCH_OWN_COURSES_FULFILLED":
      const data = action.payload.data;
      return { ...state, data }

    case "FETCH_OWN_COURSES_PENDING":
      return { ...state }

    case "FETCH_OWN_COURSES_REJECTED":
      return { ...state }

    default:
      return state;
  }
}