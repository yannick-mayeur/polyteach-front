import axios from 'axios';

export default () => axios.create({
    baseURL: "http://polyteach-back.igpolytech.fr"
});