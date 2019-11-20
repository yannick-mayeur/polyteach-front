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