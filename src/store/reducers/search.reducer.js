import { UPDATE_SEARCH_QUERY_COURSE } from '../actions/';

const initState = {
  searchQueryCourse: ""
}

export default function (state = initState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY_COURSE:
      return { ...state, searchQueryCourse: action.payload }
    default:
      return state;
  }
}
