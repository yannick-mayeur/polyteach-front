import Api from "./Api";

const connexionService = {
    login(email, password) {
        return Api.post(`/login`, {email: email, password: password})
    },

    signup(email, password, classID) {
        return Api.post(`/signup`, {email: email, password: password, class: classID})
    },

    isTokenValid(token) {
        return Api.get(`/login/isTokenValid`, token);
    },
    isAuthenticated() {
        return localStorage.getItem('jwt_token') != undefined
    }
}

export default connexionService;