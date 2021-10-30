import { KEYBOARD, OPERATOR, RESULT } from "../constants/actions"

const stateInit = {
  value: '',
  operator: [],
  result: '',
  screen: '',
};

const reducer = (state = stateInit, action = {}) => {
  const {payload} = action

  switch (action.type) {
    case KEYBOARD:
      const newNumber = state.value + payload;
      return {
        ...state,
        value: newNumber,
        screen: newNumber
      }

    case OPERATOR:
      return {
        ...state,
        operator: [...state.operator, Number(state.value), payload],
        screen: payload,
        value: ""
      };

    case RESULT:
      const calcul = [...state.operator, Number(state.value)]
        .toString()
        .replaceAll(",", "")
      const result = eval(calcul)

      return {
        operator: [],
        value: "",
        result: result,
        screen: result
      }

    default:
      return state;
  }
};

export default reducer;

  