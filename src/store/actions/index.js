
import S from '../../services'

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
