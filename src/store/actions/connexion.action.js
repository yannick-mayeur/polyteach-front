import S from '../../services';

export const LOGIN = 'LOGIN'
export function login(email, password) {
    return {
        type: LOGIN,
        payload: S.connexion.login(email, password)
    }
}


export const SIGNUP = 'SIGNUP'
export function signup(email, password) {
    return {
        type: SIGNUP,
        payload: S.connexion.signup(email, password)
    }
}