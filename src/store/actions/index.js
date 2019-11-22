import S from '../../services'
import { uploadImageWithSignedURL } from '../../services/Uploader/ImageApi';

export const FETCH_OWN_COURSES = 'FETCH_OWN_COURSES';
export function fetchOwnCourses() {
  const data = S.courses.getAllCourses()
  return {
    type: FETCH_OWN_COURSES,
    payload: data
  }
}

export const ADD_NEW_COURSE = 'ADD_NEW_COURSE';
export function addNewCourse(data) {
  return {
    type: ADD_NEW_COURSE,
    payload: S.courses.createCourse(data)
  }
}

export const CLEAR_NEW_COURSE = 'CLEAR_NEW_COURSE';
export function clearNewCourse() {
  return {
    type: CLEAR_NEW_COURSE,
  }
}

export const UPDATE_SEARCH_QUERY_COURSE = "UPDATE_SEARCH_QUERY_COURSE";
export function updateSearchQueryCourse(newQuery) {
  return {
    type: UPDATE_SEARCH_QUERY_COURSE,
    payload: newQuery
  }
}

export const UPDATE_NAME_COURSE = "UPDATE_NAME_COURSE";
export function updateCourseName(name) {
  return {
    type: UPDATE_NAME_COURSE,
    payload: name
  }
}

export const UPDATE_DESCRIPTION_COURSE = "UPDATE_DESCRIPTION_COURSE";
export function updateCourseDescription(description) {
  return {
    type: UPDATE_DESCRIPTION_COURSE,
    payload: description
  }
}

export const UPDATE_PICTURE_COURSE = "UPDATE_PICTURE_COURSE";
export function updateCoursePicture(picture) {
  console.log(picture);
  return {
    type: UPDATE_PICTURE_COURSE,
    payload: uploadImageWithSignedURL(picture)
  }
}

export const CREATE_LIVE = 'CREATE_LIVE';
export function createLive(nameCourse, description) {
  return {
    type: CREATE_LIVE,
    payload: S.live.createLive(nameCourse, description)
  }
}
export const START_RECORDING = 'START_RECORDING';
export function startToRecord(session, name, properties) {
    return {
      type: START_RECORDING,
      payload: S.live.startToRecord(session, name, properties)
    }
  }
export const STOP_RECORDING = 'STOP_RECORDING';
export function stopRecording(recordId) {
    return {
      type: STOP_RECORDING,
      payload: S.live.stopRecording(recordId)
    }
  }

export const GET_TOKEN_SESSION = 'GET_TOKEN_SESSION';
export function get_tokenSession(sessionId) {
    return {
      type: GET_TOKEN_SESSION,
      payload: S.live.get_tokenSession(sessionId)
    }
  }

export const GET_DATA_LIVE = 'GET_DATA_LIVE';
export function get_data(sessionId) {
  return {
    type: GET_DATA_LIVE,
    payload: S.live.get_data(sessionId)
  }
}

export const SAVE_LIVE = 'SAVE_LIVE';
export function saveLive(sessionId, nameSession, description,nameTeacher, idCourse) {
    return {
      type: SAVE_LIVE,
      payload: S.live.saveLive(sessionId, nameSession, description,nameTeacher, idCourse)
    }
  }
  export const IS_ACTIVE_LIVE = 'IS_ACTIVE_LIVE';
export function isActive(sessionId) {
  return {
    type: IS_ACTIVE_LIVE,
    payload: S.live.isActive(sessionId)
  }
}

  export const GET_ACTIVE_LIVES = 'GET_ACTIVE_LIVES';
  export function getActiveLives() {
    const data = S.live.getActiveLives()
    return {
      type: GET_ACTIVE_LIVES,
      payload: data
    }
  }
