import { askForSignedURL, askForSubtitles, uploadVideoToGCP } from './Uploader/VideoApi';

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
      console.log({
        titleVideo: video.name,
        videoURL: subtitles.data.videoURL,
        vttURL: subtitles.data.vttURL
      })
      return {
        titleVideo: video.name,
        videoURL: subtitles.data.videoURL,
        vttURL: subtitles.data.vttURL
      }
    }
  }
}

export default videoService;
