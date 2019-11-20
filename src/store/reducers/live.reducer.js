const initStore = {
    createdAt : "",
    errMessage: ""
}

export default function (state = initStore, action) {
  switch (action.type) {

      /** LIVE INIT ACTION **/
    case "CREATE_LIVE_FULFILLED":
      return { ...state, ovToken: action.payload.data }

    case "CREATE_LIVE_REJECTED":
      return { ...state,  }

    case "CREATE_LIVE_PENDING":
      return state;
      /** ---------------- **/


      /** RECORDING INIT ACTION **/
    case "START_RECORDING_FULFILLED":
      console.log("recording started!!");
      return { ...state, recordId: action.payload.data }

    case "START_RECORDING_REJECTED":
        console.log("recording not started!!");
       return { ...state,  }
         
    case "START_RECORDING_PENDING":
      return state;
       /** ---------------- **/


      /** RECORDING END ACTION **/
    case "STOP_RECORDING_FULFILLED":
      console.log("recording stopped!!");
      return { ...state, recordStatus: action.payload.data }

    case "STOP_RECORDING_REJECTED":
        console.log("recording not stopped!!");
       return { ...state,  }

    case "STOP_RECORDING_PENDING":
      return state;
      /** ---------------- **/    

            /** GET SESSION ACTION **/
    case "GET_TOKEN_SESSION_FULFILLED":
      console.log("session retrieved!!", action.payload);
      return { ...state, tokenSession: action.payload.data }

    case "GET_TOKEN_SESSION_REJECTED":
        console.log("session rejected!!");
       return { ...state,  }

    case "GET_TOKEN_SESSION_PENDING":
      return state;
      /** ---------------- **/    
      default:
        console.log("default");
        return state;
  }
}
