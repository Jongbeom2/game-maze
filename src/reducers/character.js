import * as types from "../actions/ActionTypes";
const initialState = {
  characterX: 0,
  characterY: 0,
};
const checkMove = (mapInfo, x, y, moveType) => {
  console.log(mapInfo);
  switch (moveType) {
    case types.MOVE_UP_CHARACTER:
      if (y === 0) {
        return false;
      } else {
        return true;
      }
    case types.MOVE_DOWN_CHARACTER:
      if (y === mapInfo.length - 1) {
        return false;
      } else {
        return true;
      }
    case types.MOVE_RIGHT_CHARACTER:
      if (x === mapInfo[0].length - 1) {
        return false;
      } else {
        return true;
      }
    case types.MOVE_LEFT_CHARACTER:
      if (x === 0) {
        return false;
      } else {
        return true;
      }
    default:
      return false;
  }
}
export default function character(state = initialState, action) {
  switch (action.type) {
    case types.MOVE_UP_CHARACTER:
      console.log(state)
      if (checkMove(state.mapInfo, state.characterX, state.characterY, types.MOVE_UP_CHARACTER)) {
        return {
          ...state,
          characterY: state.characterY - 1
        };
      } else {
        return state;
      }
    case types.MOVE_DOWN_CHARACTER:
      if (checkMove(state.mapInfo, state.characterX, state.characterY, types.MOVE_DOWN_CHARACTER)) {
        return {
          ...state,
          characterY: state.characterY + 1
        };
      } else {
        return state;
      }
    case types.MOVE_RIGHT_CHARACTER:
      if (checkMove(state.mapInfo, state.characterX, state.characterY, types.MOVE_RIGHT_CHARACTER)) {
        return {
          ...state,
          characterX: state.characterX + 1
        };
      } else {
        return state;
      }
    case types.MOVE_LEFT_CHARACTER:
      if (checkMove(state.mapInfo, state.characterX, state.characterY, types.MOVE_LEFT_CHARACTER)) {
        return {
          ...state,
          characterX: state.characterX - 1
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
