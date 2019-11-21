const initStore = {
    createdAt : "",
    errMessage: ""
}

export default function (state = initStore, action) {
  switch (action.type) {

    case "CREATE_LIVE_FULFILLED":
      return { ...state, ovToken: action.payload.data }

    case "CREATE_LIVE_REJECTED":
      return { ...state,  }

    case "CREATE_LIVE_PENDING":
      return { ...state,  }
      



    case "START_RECORDING_FULFILLED":
      return { ...state, recordId: action.payload.data }

    case "START_RECORDING_REJECTED":
       return { ...state,  }
         
    case "START_RECORDING_PENDING":
      return state;



    case "STOP_RECORDING_FULFILLED":
      return { ...state, recordStatus: action.payload.data }

    case "STOP_RECORDING_REJECTED":
       return { ...state,  }

    case "STOP_RECORDING_PENDING":
      return state;



    case "GET_TOKEN_SESSION_FULFILLED":
      return { ...state, tokenSession: action.payload.data }

    case "GET_TOKEN_SESSION_REJECTED":
       return { ...state,  }

    case "GET_TOKEN_SESSION_PENDING":
      return state;
      default:
        console.log("default");
        return state;

    case "CHECK_URL_LIVE_FULFILLED":
      return { ...state, infosLive: action.payload.data }

    case "CHECK_URL_LIVE_REJECTED":
      return { ...state,  }

    case "CHECK_URL_LIVE_PENDING":
      return state;
  }
}
