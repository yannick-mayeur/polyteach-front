import S from '../../services'

export const FETCH_ALL_COURSES_BY_CLASS = 'FETCH_ALL_COURSES_BY_CLASS';
export function fetchAllMyCoursesByClass() {
    return {
      type: FETCH_ALL_COURSES_BY_CLASS,
      payload: S.courses.getCoursesByClass()
    }
}