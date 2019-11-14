import Api from "./Api";

const connexionService = {
    login(email, password) {
        return Api().post(`/login`, {email: email, password: password})
    },

    signup(email, password) {
        return Api().post(`/signup`, {email: email, password: password})
    }
}

export default connexionService;