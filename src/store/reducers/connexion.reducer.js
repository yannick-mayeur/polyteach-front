import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/connexion.action';

const initState = {
  user: {},
  token: {},
  errConnexion: ""
}

export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload.user, token: action.payload.token }
    case LOGIN_FAILURE:
      return { ...state, errConnexion: action.payload.err }
    default:
      return state;
  }
}