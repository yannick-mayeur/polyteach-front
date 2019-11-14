import Api from "./Api";

const connexionService = {
    login(name, mdp) {
        return Api().post(`/login`, {name: name, mdp: mdp})
    }
}

export default connexionService;