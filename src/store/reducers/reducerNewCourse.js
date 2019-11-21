import { FETCH_STUDENTS, UPDATE_NAME_COURSE, UPDATE_DESCRIPTION_COURSE } from '../actions';
import { ADD_STUDENTS, CLEAR_STUDENTS, REMOVE_STUDENTS, REMOVE_STUDENT } from '../actions/students.action';
import { UPLOAD_VIDEO, UPDATE_NAME_VIDEO, REMOVE_VIDEO } from '../actions/video.action';

const initialState = {
  createdCourse: [],
  students: {
    selectedStudents: [],
    isIG3Added: false,
    isIG4Added: false,
    isIG5Added: false,
  },
  videos: {
    displaySpinner: false,
    message: "",
    selectedVideos: [],
  },
  name: "",
  description: "",
  picture: {
    name: "",
    url: "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-7.jpg",
    fetching: false,
    failed: false
  },
  fetching: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_COURSE_PENDING":
      return { ...state, fetching: true}

    case "ADD_NEW_COURSE_FULFILLED": {
      return {initialState}
    }

    case "ADD_NEW_COURSE_REJECTED": {
      return { ...state, fetching: false, failed: true }
    }

      // STUDENTS
    case ADD_STUDENTS: {
      const selectedStudents = [...new Set(state.students.selectedStudents.concat(action.payload.selectedStudents))];
      return {...state,
        students: {
          selectedStudents: selectedStudents,
          isIG3Added: action.payload.fromClass == 0 || state.students.isIG3Added,
          isIG4Added: action.payload.fromClass == 1 || state.students.isIG4Added,
          isIG5Added: action.payload.fromClass == 2 || state.students.isIG5Added,
        }
      }
    }

    case REMOVE_STUDENTS: {
      const newSelectedStudents = [...new Set(
        state.students.selectedStudents.filter(student => !action.payload.selectedStudents.includes(student)))];
      return {...state,
        students: {
          selectedStudents: newSelectedStudents,
          isIG3Added: action.payload.fromClass == 0 ? !state.students.isIG3Added : state.students.isIG3Added,
          isIG4Added: action.payload.fromClass == 1 ? !state.students.isIG4Added : state.students.isIG4Added,
          isIG5Added: action.payload.fromClass == 2 ? !state.students.isIG5Added : state.students.isIG5Added,
        }
      }
    }

    case REMOVE_STUDENT: {
      const newSelectedStudent = [...new Set(
        state.students.selectedStudents.filter(student => action.payload.selectedStudents.id != student.id))];
      return {...state,
        students: {
          selectedStudents: newSelectedStudent,
          isIG3Added: state.students.isIG3Added,
          isIG4Added: state.students.isIG4Added,
          isIG5Added: state.students.isIG5Added,
        }
      }
    }

    case CLEAR_STUDENTS: {
      return {...state} // TODO
    }


      // INFORMATIONS
    case UPDATE_NAME_COURSE: {
      return {...state, name: action.payload}
    }

    case UPDATE_DESCRIPTION_COURSE: {
      return {...state, description: action.payload}
    }

    case "UPDATE_PICTURE_COURSE_PENDING": {
      return {...state, picture: {...state.picture, fetching: true}}
    }

    case "UPDATE_PICTURE_COURSE_FULFILLED": {
      return {...state, picture: {...state.picture, name: action.payload.pictureName, url: action.payload.pictureURL, fetching: true, failed: action.payload.failed}}
    }

    case "UPDATE_PICTURE_COURSE_REJECTED": {
      return {...state, picture: {...state.picture, fetching: true}}
    }

      //VIDEOS
    case UPLOAD_VIDEO + "_FULFILLED": {
      let selectedVideos = Object.assign(state.videos.selectedVideos);
      selectedVideos.push(action.payload);
      return { ...state, videos: {...state.videos, selectedVideos: selectedVideos, displaySpinner: false}}
    }

    case UPLOAD_VIDEO + "_PENDING": {
      return { ...state, videos: {...state.videos, displaySpinner: true}}
    }

    case UPLOAD_VIDEO + "_REJECTED": {
      return { ...state, videos: {...state.videos, displaySpinner: false, message: "Failed to upload the video !"}}
    }

    case UPDATE_NAME_VIDEO: {
      let selectedVideos = Object.assign(state.videos.selectedVideos);
      selectedVideos[action.payload.id].titleVideo = action.payload.newName;
      return {...state, videos: {...state.videos, selectedVideos: selectedVideos}}
    }

    case REMOVE_VIDEO: {
      let selectedVideos = state.videos.selectedVideos.filter((_, i) => i !== action.payload.id);
      return {...state, videos: {...state.videos, selectedVideos: selectedVideos}}
    }

    default: {
      return state;
    }
  }
}
