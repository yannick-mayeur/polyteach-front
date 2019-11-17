import axios from "axios";
import {URL_API} from "./Config";

const askForSignedImageURL = (pictureName) => {
    return axios.post(`${URL_API}/picture/upload`, {pictureName: pictureName})
        .then((result) => {
            return result;
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

export {uploadImageToGCP, askForSignedImageURL}