import { combineReducers } from 'redux';

import CoursesReducer from './courses.reducer';
import NewCourseReducer from './reducerNewCourse';
import LoginReducer from './connexion.reducer';
import SearchReducer from './search.reducer';

const rootReducer = combineReducers({
  courses: CoursesReducer,
  newCourse: NewCourseReducer,
  login: LoginReducer,
  search: SearchReducer,
});

export default rootReducer;
