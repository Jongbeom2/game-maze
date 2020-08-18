import * as types from "../actions/ActionTypes";

const initialState = {
  color : [255,255,255]
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_BG:
      return {...state, color: action.color};
    default:
      return state;
  }
}
