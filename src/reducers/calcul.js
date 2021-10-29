const stateInit = {
  value1: 0
}

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case "CHOICE":

      return {
        ...state,
      };

    default:
      return state
  }
};

export default reducer
  