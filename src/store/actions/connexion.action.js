import S from '../../services';

export const LOGIN = 'LOGIN'
export function login(email, password) {
    return {
        type: LOGIN,
        payload: S.connexion.login(email, password)
    }
}


export const SIGNUP = 'SIGNUP'
export function signup(email, password, classID) {
    return {
        type: SIGNUP,
        payload: S.connexion.signup(email, password, classID)
    }
}


export const SET_USER = 'SET_USER'
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}