import { combineReducers } from 'redux';

import OwnCoursesReducer from './reducerOwnCourses';
import NewCourseReducer from './reducerNewCourse';
import LoginReducer from './connexion.reducer';

const rootReducer = combineReducers({
  ownCourses: OwnCoursesReducer,
  newCourse: NewCourseReducer,
  login: LoginReducer,
});

export default rootReducer;