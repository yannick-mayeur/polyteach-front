import axios from "axios";
import {URL_API} from "./Config";

const askForSignedURL = (videoName) => {
    return axios.post(`${URL_API}/video/upload`, {videoName: videoName})
        .then((result) => {
            return result.data.signedURL;
        })
        .catch((error) => {
            console.log(error)
        })
};

const uploadVideoToGCP = (video, signedUrl) => {
    return axios.put(signedUrl, video, {headers: {'Content-Type': 'video/*'}})
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        })
};

const askForSubtitles = (videoName) => {
    return axios.post(`${URL_API}/video/subtitles`, {videoName: videoName},)
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => {
            console.log(error);
        })
};
export {askForSignedURL, uploadVideoToGCP, askForSubtitles}