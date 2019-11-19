import S from '../../services'

export const FETCH_ALL_COURSES = 'FETCH_ALL_COURSES';
export function fetchAllMyCourses() {
    return {
      type: FETCH_ALL_COURSES,
      payload: S.courses.getAllCourses()
    }
}