import { FETCH_ALL_COURSES, BOOKMARK_COURSE, UNBOOKMARK_COURSE, RATE_COURSE, UPDATE_RATE_COURSE } from '../actions/courses.action';

const initState = {
  myCourses: [],
  myLives: [],
}

export default function (state = initState, action) {
  switch (action.type) {

    case "GET_ACTIVE_LIVES_FULFILLED":
      const myLives = action.payload.data ;
      return { ...state, myLives: myLives, fetchingLives: false }

    case "GET_ACTIVE_LIVES_REJECTED":
      return { ...state, fetchingLives: false }

    case "GET_ACTIVE_LIVES_PENDING":
      return {...state, fetchingLives: true }


    case "FETCH_ALL_COURSES_FULFILLED":
      const myCourses = action.payload.data;
      return { ...state, myCourses: myCourses, fetching: false }

    case "FETCH_ALL_COURSES_PENDING":
      return { ...state, fetching: true }

    case "FETCH_ALL_COURSES_REJECTED":
      return { ...state, fetching: false }

    case BOOKMARK_COURSE + '_FULFILLED':
      // Replace the last course
      const bookmarkedCourses = state.myCourses.map(course => {
        if (course.id == action.payload.data.course.id) {
          return action.payload.data.course
        } else {
          return course
        }
      });
      return { ...state, myCourses: bookmarkedCourses }
    case BOOKMARK_COURSE + '_PENDING':
      return { ...state, }
    case BOOKMARK_COURSE + '_REJECTED':
      return { ...state, }

    case UNBOOKMARK_COURSE + '_FULFILLED':
      const unbookmarkedCourses = state.myCourses.map(course => {
        if (course.id == action.payload.data.course.id) {
          return action.payload.data.course
        } else {
          return course
        }
      });
      return { ...state, myCourses: unbookmarkedCourses }
    case UNBOOKMARK_COURSE + '_PENDING':
      return { ...state, }
    case UNBOOKMARK_COURSE + '_REJECTED':
      return { ...state, }

    case RATE_COURSE + '_FULFILLED':
      const ratedCourse = state.myCourses.map(course => {
        if (course.id == action.payload.data.id) {
          return action.payload.data
        } else {
          return course
        }
      });
      return { ...state, myCourses: ratedCourse }
    case RATE_COURSE + '_PENDING':
      return { ...state, }
    case RATE_COURSE + '_REJECTED':
      return { ...state, }

    case UPDATE_RATE_COURSE + '_FULFILLED':
      const ratedUpdateCourse = state.myCourses.map(course => {
        if (course.id == action.payload.data.id) {
          return action.payload.data
        } else {
          return course
        }
      });
      return { ...state, myCourses: ratedUpdateCourse }
    case UPDATE_RATE_COURSE + '_PENDING':
      return { ...state, }
    case UPDATE_RATE_COURSE + '_REJECTED':
      return { ...state, }


    case "REMOVE_COURSE": {
        const courseDeleted = action.payload.data;
        return {...state, myCourses: state.myCourses.filter(course => course.id !== courseDeleted.id)}
      }


    default:
      return state;
  }
}