export default function (state = {data: []}, action) {
  switch (action.type) {
    case "ADD_NEW_COURSE_PENDING":
      console.log("pending")
      
      return { ...state, fetching: true}

    case "ADD_NEW_COURSE_FULFILLED":
      console.log("fulfilled")
      const data = action.payload;
      return { ...state, data, fetching: false}
    case "ADD_NEW_COURSE_REJECTED":
      console.log("ntm")
      return { ...state, fetching: false }

    default:
      return state;
  }
}