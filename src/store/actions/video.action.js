import S from '../../services'

export const UPLOAD_VIDEO = 'UPLOAD_VIDEO'
export function uploadVideo(video) {
    return {
        type: UPLOAD_VIDEO,
        payload: S.video.uploadVideo(video),
    }
    
}

export const UPDATE_NAME_VIDEO = 'UPDATE_NAME_VIDEO';
export function updateNameVideo(newName, id) {
  return {
    type: UPDATE_NAME_VIDEO,
    payload: {
      id: id,
      newName: newName
    }
  }
}

export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export function removeVideo(id) {
  return {
    type: REMOVE_VIDEO,
    payload: {
      id: id,
    }
  }
}

export const SELECT_VIDEO = 'SELECT_VIDEO';
export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: S.video.getSubtitles(video)
  }
}

export const RATE_VIDEO = 'RATE_VIDEO';
export function rateVideo(video, rate) {
  return {
    type: RATE_VIDEO,
    payload: S.video.rateVideo(video, rate),
  }
}

export const UPDATE_RATE_VIDEO = 'UPDATE_RATE_VIDEO';
export function updateRateVideo(video, rate) {
  return {
    type: UPDATE_RATE_VIDEO,
    payload: S.video.updateRateVideo(video, rate),
  }
}
