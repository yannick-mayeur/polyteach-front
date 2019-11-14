import S from '../../services';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export function login(name, mdp) {
    return S.connexion.login(name, mdp)
    .then(data => {
        return {
            type: LOGIN_SUCCESS,
            payload: data
        }
    })
    .catch(data => {
        return {
            type: LOGIN_FAILURE,
            payload: data.response.statusText
        }
    })
}