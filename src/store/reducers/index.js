import { combineReducers } from 'redux';

import OwnCoursesReducer from './reducerOwnCourses';

const rootReducer = combineReducers({
  ownCourses: OwnCoursesReducer,
});

export default rootReducer;