import S from '../../services';
import { selectVideo } from './video.action';

export const FETCH_ALL_COURSES = 'FETCH_ALL_COURSES';
export function fetchAllMyCourses() {
    return {
      type: FETCH_ALL_COURSES,
      payload: S.courses.getAllCourses()
    }
}


export const FETCH_COURSE = 'FETCH_COURSE';
export function fetchCourse(courseID) {
    return {
      type: FETCH_COURSE,
      payload: S.courses.getCourse(courseID)
    }
}

export const REMOVE_COURSE = 'REMOVE_COURSE';
export function removeCourse(courseID) {
    return {
      type: REMOVE_COURSE,
      payload: S.courses.deleteCourse(courseID)
    }
}


export function fetchCourseWithVideo(courseID) {
    return dispatch => {
        const result = dispatch(fetchCourse(courseID))

        result.then((course) => {
            if (course.action.type === FETCH_COURSE + "_FULFILLED") {
                if (course.action.payload.data.videos && course.action.payload.data.videos.length > 0) {
                    dispatch(selectVideo(course.action.payload.data.videos[0]))
                }
            }
        })
    }
}
export const BOOKMARK_COURSE = 'BOOKMARK_COURSE';
export function bookmarkCourse(course) {
  return {
    type: BOOKMARK_COURSE,
    payload: S.courses.bookmarkCourse(course)
  }
}

export const UNBOOKMARK_COURSE = 'UNBOOKMARK_COURSE';
export function unbookmarkCourse(course) {
  return {
    type: UNBOOKMARK_COURSE,
    payload: S.courses.unbookmarkCourse(course)
  }
}

export const RATE_COURSE = 'RATE_COURSE';
export function rateCourse(course, rate) {
  return {
    type: RATE_COURSE,
    payload: S.courses.rateCourse(course, rate),
  }
}

export const UPDATE_RATE_COURSE = 'UPDATE_RATE_COURSE';
export function updateRateCourse(course, rate) {
  return {
    type: UPDATE_RATE_COURSE,
    payload: S.courses.updateRateCourse(course, rate),
  }
}

export const RATE_COURSE_AND_REFRESH = 'RATE_COURSE_AND_REFRESH';
export function rateCourseAndRefresh(course, rate) {
  return (dispatch) => {
    dispatch(rateCourse(course, rate))
      .then(() => dispatch(fetchAllMyCourses()))
  }
}

export const UPDATE_RATE_COURSE_AND_REFRESH = 'UPDATE_RATE_COURSE_AND_REFRESH';
export function updateRateCourseAndRefresh(course, rate) {
  return (dispatch) => {
    dispatch(updateRateCourse(course, rate))
      .then(() => dispatch(fetchAllMyCourses()))
  }
}

export const ADD_COURSE_TO_EDIT = 'ADD_COURSE_TO_EDIT';
export function addCourseToEdit(idCourse) {
  return {
    type: ADD_COURSE_TO_EDIT,
    payload: idCourse,
  }
}

export const FETCH_COURSE_TO_EDIT = 'FETCH_COURSE_TO_EDIT';
export function fetchCourseToEdit(idCourse) {
  return {
    type: FETCH_COURSE_TO_EDIT,
    payload: S.courses.getAllInfosCourseById(idCourse),
  }
}

export const UPDATE_COURSE = 'UPDATE_COURSE';
export function updateCourse(course) {
  return {
    type: UPDATE_COURSE,
    payload: S.courses.updateCourse(course),
  }
}