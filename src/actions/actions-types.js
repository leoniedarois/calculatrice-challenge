import {OPERATOR, RESULT, KEYBOARD} from "../constants/actions"

export const setKeyboardValue = (payload) => ({type: KEYBOARD, payload})
export const setOperator = (payload) => ({type: OPERATOR, payload})
export const setResult = (payload) => ({type: RESULT, payload})