import axios from 'axios';

export default () => axios.create({
    baseURL: "https://polyteach-back.igpolytech.fr"
});