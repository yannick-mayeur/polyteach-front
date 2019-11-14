import {CREATE_LIVE_SUCCESS, CREATE_LIVE_FAILURE} from '../actions/index';

const initStore = {
    createdAt : "",
    errMessage: ""
}

export default function (state = initStore, action) {
    switch (action.type) {
        case CREATE_LIVE_SUCCESS:
            return { ...state, createdAt: action.payload.data }

        case CREATE_LIVE_FAILURE:
            return { ...state, errMessage: action.payload.data }
        default:
            return state;
    }
}