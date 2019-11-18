import axios from 'axios';

export default () => axios.create({
    baseURL: "https://polyteach-back-staging.igpolytech.fr"
    //baseURL: "https://polyteach-back.igpolytech.fr"
    //baseURL: "http://localhost:3000"
});

client.interceptors.request.use((request) => {
    const token = localStorage.getItem('jwt_token')
    if (token) {
        request.headers['Authorization'] = 'Bearer ' + token;
        
    }
    return request
});

export default client;
