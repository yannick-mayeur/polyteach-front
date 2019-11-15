import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/connexion.action';

const initState = {
  fetchingLogin: false,
  fetchingSignup: false,
  user: null,
  errConnection: null,
  errSignup: null,
}

export default function (state = initState, action) {
  switch (action.type) {
    // LOGIN
    case "LOGIN_PENDING":
      return { ...state, fetchingLogin: true, errConnection: null }
    case "LOGIN_FULFILLED":
      localStorage.setItem('connexionToken', action.payload.data.token);
      return { ...state, user: action.payload.data.user, fetchingLogin: false, errConnection: null }
    case "LOGIN_REJECTED":
      return { ...state, errConnection: action.payload.response.statusText, fetchingLogin: false }
    //END LOGIN

    // SIGNUP
    case "SIGNUP_PENDING":
      return { ...state, fetchingSignup: true, errSignup: null }
    case "SIGNUP_FULFILLED":
      return { ...state, user: action.payload.user, fetchingSignup: false, errSignup: null }
    case "SIGNUP_REJECTED":
      return { ...state, errSignup: action.payload.response.statusText, fetchingSignup: false }
    //END SIGNUP



    default:
      return state;
  }
}