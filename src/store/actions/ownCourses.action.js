import S from '../../services'

export const FETCH_OWN_COURSES = 'FETCH_OWN_COURSES';
export function fetchOwnCourses() {
  return S.courses.getAllCourses()
  .then(res => {
    return {
      type: FETCH_OWN_COURSES,
      payload: res
    }
  })
}