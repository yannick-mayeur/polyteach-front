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

export const CREATE_LIVE_SUCCESS = 'CREATE_LIVE_SUCCESS';
export const CREATE_LIVE_FAILURE = 'CREATE_LIVE_FAILURE';
export function createLive(nameCourse, description) {
  S.live.createLive(nameCourse, description).then(res => {
    return {
      type: CREATE_LIVE_SUCCESS,
      payload: res
    }
  }).catch(res => {
    // print err
    return {
      type: CREATE_LIVE_FAILURE,
      payload: "err"
    }
  })

}
