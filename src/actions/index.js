import * as types from "./ActionTypes";

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: types.DECREMENT,
  };
}

export function changeBg(color) {
  return {
    type: types.CHANGE_BG,
    color,
  };
}
