import { askForSignedURL, askForSubtitles, uploadVideoToGCP, askForVTT } from './Uploader/VideoApi';

const videoService = {
  /**
   * Upload a video and return his title, video and subtitle url
   */
  async uploadVideo( video ) {
    // We use a FormData to send the video
    let data = new FormData();
    data.append('video', video);
    const signedURL = await askForSignedURL(video.name);
    const isUpload = await uploadVideoToGCP(video, signedURL);

    if (isUpload) {
      const subtitles = await askForSubtitles(video.name);
      return {
        titleVideo: video.name,
        videoURL: subtitles.data.videoURL,
        vttURL: subtitles.data.vttURL
      }
    }
  },
  
  async getSubtitles(video) {
    const subtitles = await askForVTT(video.vttUrl);
    return {
        subtitles: subtitles,
        selectedVideo: video.id,
    }
  }
}

export default videoService;
