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
      console.log("recording started!!");
      return { ...state, recordStatus: action.payload.data }

    case "STOP_RECORDING_REJECTED":
        console.log("recording not started!!");
       return { ...state,  }

    case "STOP_RECORDING_PENDING":
      return state;
      /** ---------------- **/    

      default:
        console.log("default");
        return state;
  }
}
