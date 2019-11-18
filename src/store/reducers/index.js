import { combineReducers } from 'redux';

import OwnCoursesReducer from './reducerOwnCourses';
import NewCourseReducer from './reducerNewCourse';
import LoginReducer from './connexion.reducer';
import SearchReducer from './search.reducer';

const rootReducer = combineReducers({
  ownCourses: OwnCoursesReducer,
  newCourse: NewCourseReducer,
  login: LoginReducer,
  search: SearchReducer,
});

export default rootReducer;
