import { FETCH_STUDENTS } from '../actions';
import { ADD_STUDENTS, CLEAR_STUDENTS } from '../actions/students.action';

const initialState = {
  data: [],
  selectedStudents: [],
  isIG3Added: false,
  isIG4Added: false,
  isIG5Added: false,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_STUDENTS_FULFILLED":
      const data = action.payload.data;
      return { ...state, data, fetching: false }

    case "FETCH_STUDENTS_PENDING":
      return { ...state , fetching: true}

    case "FETCH_STUDENTS_REJECTED":
      return { ...state , fetching: false}

    case ADD_STUDENTS:
      const selectedStudents = [...new Set(state.selectedStudents.concat(action.payload.selectedStudents))];
      console.log(action.payload);
      return {...state,
        selectedStudents: selectedStudents,
        isIG3Added: action.payload.fromClass == 0,
        isIG4Added: action.payload.fromClass == 1,
        isIG5Added: action.payload.fromClass == 2,
      }
    case CLEAR_STUDENTS:
      return {...state, selectedStudents: []}

    default:
      return state;
  }
}
