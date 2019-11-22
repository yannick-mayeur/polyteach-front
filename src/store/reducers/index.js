import { combineReducers } from 'redux';

import CoursesReducer from './courses.reducer';
import NewCourseReducer from './reducerNewCourse';
import LoginReducer from './connexion.reducer';
import SearchReducer from './search.reducer';
import StudentReducer from './student.reducer';
import VideoReducer from './video.reducer';
import LiveReducer from './live.reducer';

const rootReducer = combineReducers({
  courses: CoursesReducer,
  newCourse: NewCourseReducer,
  login: LoginReducer,
  search: SearchReducer,
  students: StudentReducer,
  video: VideoReducer,
  live: LiveReducer,
});

export default rootReducer;
