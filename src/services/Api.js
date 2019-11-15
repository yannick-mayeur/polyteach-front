import axios from 'axios';

export default () => axios.create({
    //baseURL: "https://polyteach-back.igpolytech.fr"
    baseURL: "http://localhost:3000"
});