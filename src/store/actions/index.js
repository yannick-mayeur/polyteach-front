export const FETCH_OWN_COURSES = 'FETCH_OWN_COURSES';

import S from '../../services'

export function fetchOwnCourses() {
  const data = S.courses.getAllCourses()

  return {
    type: FETCH_OWN_COURSES,
    payload: data
  }
}