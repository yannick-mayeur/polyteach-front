import S from '../../services'

export const UPLOAD_VIDEO = 'UPLOAD_VIDEO'
export function uploadVideo(video) {
    return {
        type: UPLOAD_VIDEO,
        payload: S.video.uploadVideo(video),
    }
    
}