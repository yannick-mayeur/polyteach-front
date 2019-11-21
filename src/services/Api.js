import axios from 'axios'
import S from '../services'

const client = axios.create({
    baseURL: "https://polyteach-back-staging.igpolytech.fr"
    //baseURL: "https://polyteach-back.igpolytech.fr"
    //baseURL: "http://localhost:3000"
});

client.interceptors.request.use((request) => {
    const token = localStorage.getItem('access_token')
    if (token) {
        request.headers['Authorization'] = 'Bearer ' + token;
        
    }
    return request
});

client.interceptors.response.use((response) => {
    return response
},
function (error) {
    const request = error.request
    if (error.response.status === 401 && !request._retry) {
        request._retry = true
        const refreshToken = localStorage.getItem('refresh_token')
        // ask for a refresh token
        S.connexion.refreshToken(refreshToken) 
        .then(function (response) {
            
            if (response.status === 200) {
                // store the new valid tokens
                localStorage.setItem("access_token", response.data.access_token)
                localStorage.setItem("refresh_token", response.data.refresh_token)
                // make the request with the new valid acces token in header
                request.headers['Authorization'] = 'Bearer ' + response.data.access_token
                
                return client(request).catch(err => {
                    window.location.replace('/connexion');
                });
            } else {
                //refresh token not valid : connexion required
                window.location.replace('/connexion')
            }
        });
    }
})

export default client;
