import S from '../../services'

export const FETCH_ALL_COURSES_BY_CLASS = 'FETCH_ALL_COURSES_BY_CLASS';
export function fetchAllMyCoursesByClass() {
  return {
    type: FETCH_ALL_COURSES_BY_CLASS,
    payload: S.courses.getCoursesByClass()
  }
}

export const FETCH_ALL_INFOS_ON_COURSE = 'FETCH_ALL_INFOS_ON_COURSE;
export function fetchAllInfosOnCourse(idCourse) {
  return {
    type: FETCH_ALL_INFOS_ON_COURSE,
    payload: S.courses.getAllInfosOnCourse(idCourse),
  }
}