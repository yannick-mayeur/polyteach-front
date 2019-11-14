import { combineReducers } from 'redux';

import OwnCoursesReducer from './reducerOwnCourses';
import ConnexionReducer from './connexion.reducer'

const rootReducer = combineReducers({
  ownCourses: OwnCoursesReducer,
  connexion: ConnexionReducer,
});

export default rootReducer;