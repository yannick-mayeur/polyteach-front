import Api from "./Api";
import Axios from "axios"

const clientId = "c92bcd96-70e3-480a-8bae-c4d7465e4979"

const connexionService = {
    login(email, password) {
        return Api.post(`/login`, {email: email, password: password})
    },
    signup(token) {
        return Api.post('/signup', {token : token})
    },
    isTokenValid(token) {
        return Api.get(`/login/isTokenValid`, token);
    },
    isAuthenticated() {
        return localStorage.getItem('jwt_token') != undefined
    },
    askToken(code) {
        return Axios.post('https://oauth.igpolytech.fr/token', {
            code: code,
            client_id: clientId
        }, { headers: { 'Access-Control-Allow-Origin' : '*' }
        })
    },
    refreshToken(refresh_token) {
        return Axios.post('https://oauth.igpolytech.fr/refresh', {
            refresh_token: refresh_token,
            client_id: clientId
        }, { headers: { 'Access-Control-Allow-Origin' : '*' }
        })
    }
}

export default connexionService;