import { FETCH_COURSE } from '../actions/courses.action';

const initState = {
    course : {
        name: '',
        teacherName: '',
        videos: [],
    }
  }

  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_COURSE+"_FULFILLED":
        const course = action.payload.data;
        return { ...state, course, fetching: false }
  
      case FETCH_COURSE+"_PENDING":
        return { ...state , fetching: true}
  
      case FETCH_COURSE+"_REJECTED":
        return { ...state , fetching: false}
  
      default:
        return state;
    }
  }