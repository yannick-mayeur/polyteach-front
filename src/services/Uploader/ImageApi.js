import axios from "axios";
import {URL_API} from "./Config";

const askForSignedImageURL = (pictureName) => {
    return axios.get(`${URL_API}/picture/upload/${pictureName}`)
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

const uploadImageWithSignedURL = async (picture) => {
  const result = await askForSignedImageURL(picture.name);
  const see = await uploadImageToGCP(picture, result.data.signedURL);
  if (see) {
    return {
      pictureName: picture.name,
      pictureURL: result.data.pictureURL,
      failed: false
    };
  } else {
    return {failed: true}
  }
}

export {uploadImageWithSignedURL}
