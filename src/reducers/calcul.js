const stateInit = {
    result: '12'
  };
  
  const reducer = (state = stateInit, action = {}) => {
        switch (action.type) {
            case "CHOICE":


                return {
                    ...state,
                };
        
            default:
                return state;
        }
  };
  
  export default reducer;
  