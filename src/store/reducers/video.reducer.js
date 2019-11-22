import { FETCH_COURSE } from '../actions/courses.action';
import { SELECT_VIDEO, RATE_VIDEO, UPDATE_RATE_VIDEO } from '../actions/video.action';

const initState = {
        name: '',
        teacherName: '',
        videos: [],
        selectedCourse: 0,
        selectedSubtitles: '',
        fetching: false,
  }

  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_COURSE+"_FULFILLED":
        const course = action.payload.data;
        return { ...state, name: course.name, videos: course.videos, teacherName: course.teacherName, fetching: false }
  
      case FETCH_COURSE+"_PENDING":
        return { ...state , fetching: true}
  
      case FETCH_COURSE+"_REJECTED":
        return { ...state , fetching: false}


      case SELECT_VIDEO+"_FULFILLED":
        return { ...state, selectedSubtitles: action.payload.subtitles.data, selectedCourse: action.payload.selectedVideo, fetching: false}
    
      case SELECT_VIDEO+"_PENDING":
        return { ...state , fetching: true}

      case SELECT_VIDEO+"_REJECTED":
        return { ...state, fetching: false }

    case RATE_VIDEO +  '_FULFILLED' : 
    const ratedVideos = state.videos.map(video => {
      if (video.id == action.payload.data.id) {
        return action.payload.data
      } else {
        return video
      }
    });
      return { ...state, videos : ratedVideos}
    case RATE_VIDEO +  '_PENDING' :
      return { ...state, }
     case RATE_VIDEO + '_REJECTED' :
      return { ...state, }

		case UPDATE_RATE_VIDEO + '_FULFILLED' :
        const ratedUpdateVideos = state.videos.map(video => {
          if (video.id == action.payload.data.id) {
            return action.payload.data
          } else {
            return video
          }
        });
        return { ...state, videos : ratedUpdateVideos}
    case UPDATE_RATE_VIDEO + '_PENDING' :
      return { ...state, }
     case UPDATE_RATE_VIDEO + '_REJECTED' :
      return { ...state, }
      
      default:
        return state;
    }
  }