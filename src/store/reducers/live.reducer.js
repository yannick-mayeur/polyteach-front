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
      return state;
    default:
      console.log("default");
      return state;
  }
}
