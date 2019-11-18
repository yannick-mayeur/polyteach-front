import { FETCH_STUDENTS } from '../actions';
import { ADD_STUDENTS, CLEAR_STUDENTS } from '../actions/students.action';

const initialState = {
  createdCourse: [],
  students: {
    selectedStudents: [],
    isIG3Added: false,
    isIG4Added: false,
    isIG5Added: false,
  },
  fetching: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_COURSE_PENDING":
      return { ...state, fetching: true}

    case "ADD_NEW_COURSE_FULFILLED":
      const createdCourse = action.payload;
      return { ...state, createdCourse, fetching: false}

    case "ADD_NEW_COURSE_REJECTED":
      return { ...state, fetching: false }

    case ADD_STUDENTS:
      const selectedStudents = [...new Set(state.students.selectedStudents.concat(action.payload.selectedStudents))];
      console.log(action.payload);
      return {...state,
        students: {
          selectedStudents: selectedStudents,
          isIG3Added: action.payload.fromClass == 0 || state.students.isIG3Added,
          isIG4Added: action.payload.fromClass == 1 || state.students.isIG4Added,
          isIG5Added: action.payload.fromClass == 2 || state.students.isIG5Added,
        }
      }

    case CLEAR_STUDENTS:
      return {...state} // TODO

    default:
      return state;
  }
}
