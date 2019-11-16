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
    return axios.put(signedUrl, video, {headers: {'Content-Type': 'video/mp4'}})
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

const askForSignedImageURL = (pictureName) => {
    return axios.post(`${URL_API}/picture/upload`, {pictureName: pictureName})
        .then((result) => {
            return result.data.signedURL;
        })
        .catch((error) => {
            console.log(error)
        })
};

const uploadImageToGCP = (video, signedUrl) => {
    return axios.put(signedUrl, video, {headers: {'Content-Type': 'image/*'}})
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        })
};

export {askForSignedURL, uploadVideoToGCP, askForSubtitles, uploadImageToGCP, askForSignedImageURL}