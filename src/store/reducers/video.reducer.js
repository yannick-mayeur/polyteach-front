import { UPLOAD_VIDEO } from '../actions/video.action';

const initialState = {
  displaySpinner: false,
  message: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_VIDEO + "_FULFILLED":
      return { ...state, displaySpinner: false }

    case UPLOAD_VIDEO + "_PENDING":
      return { ...state , displaySpinner: true}

    case UPLOAD_VIDEO + "_REJECTED":
      return { ...state , displaySpinner: false, message: "Failed to upload the video !"}

    default:
      return state;
  }
}