import axios from "axios";
import {URL_API} from "./Config";

/**
 * Function to get a signed URL to upload a file on GCP.
 *
 * @param videoName The name of the file that we want to upload
 * @returns {Promise<AxiosResponse<any>>}
 */
const askForSignedURL = (videoName) => {
    return axios.get(`${URL_API}/video/upload/${videoName}`)
        .then((result) => {
            return result.data.signedURL;
        })
        .catch((error) => {
            console.log(error)
        })
};

/**
 * Function to upload a video to GCP.
 *
 * @param video The video
 * @param signedUrl The signed URl
 * @returns {Promise<boolean>}
 */
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

/**
 * Function to get the video url and the vtt url for the video name given in parameter.
 *
 * @param videoName The video name
 * @returns {Promise<AxiosResponse<any>>}
 */
const askForSubtitles = (videoName) => {
    return axios.get(`${URL_API}/video/subtitles/${videoName}`)
        .then((result) => {
            console.log(result);
            return result;
        })
        .catch((error) => {
            console.log(error);
        })
};

/**
 * Function to get the subtitles from the vtt file url given in parameter.
 *
 * @param vttURL
 * @returns {Promise<AxiosResponse<any>>}
 */
const askForVTT = (vttURL) => {
    return axios.post(`${URL_API}/video/vtt/`, {vttURL: vttURL})
        .then((result) => {
            return result
        })
        .catch((error) => {
            console.log(error);
        })
};

export {askForSignedURL, uploadVideoToGCP, askForSubtitles, askForVTT}
