import { combineReducers } from 'redux';

import OwnCoursesReducer from './reducerOwnCourses';
import NewCourseReducer from './reducerNewCourse'

const rootReducer = combineReducers({
  ownCourses: OwnCoursesReducer,
  newCourse: NewCourseReducer
});

export default rootReducer;