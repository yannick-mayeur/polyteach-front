import { askForSignedURL, askForSubtitles, uploadVideoToGCP, askForVTT } from './Uploader/VideoApi';
import Api from "./Api";

const videoService = {
    /**
     * Upload a video and return his title, video and subtitle url
     */
    async uploadVideo(video) {
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
    },


    //TODO - Add a reducer that will update the state and set the video as rated by the user with the value `rating`
    //For now we can not fetch such information so we won't handle it
    rateVideo(videoID, rating) {
        const ratingValue = {
            idVideoRatingVideo: videoID,
            valueRatingVideo: rating,
        }
        return Api.post(`ratingvideo/`, ratingValue);
    }
}

export default videoService;
