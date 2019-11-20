import axios from 'axios';

const client = axios.create({
    baseURL: "https://polyteach-back-staging.igpolytech.fr"
    //baseURL: "https://polyteach-back.igpolytech.fr"

});

client.interceptors.request.use((request) => {
    const token = localStorage.getItem('jwt_token')
    if (token) {
        request.headers['Authorization'] = 'Bearer ' + token;
        
    }
    return request
});

export default client;
