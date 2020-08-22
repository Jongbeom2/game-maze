import * as types from "./ActionTypes";
export function changeWidthSize(widthSize) {
  return {
    type: types.CHANGE_WIDTH_SIZE,
    widthSize
  };
}

export function changeHeightSize(heightSize) {
  return {
    type: types.CHANGE_HEIGHT_SIZE,
    heightSize
  };
}

export function changeProbability(probability){
  return{
    type: types.CHANGE_PROBABILITY,
    probability
  }
}

export function clickCreateBtn() {
  return {
    type: types.CLICK_CREATE_BTN
  };
}

export function moveUpCharacter(){
  return{
    type: types.MOVE_UP_CHARACTER
  }
}

export function moveDownCharacter(){
  return{
    type: types.MOVE_DOWN_CHARACTER
  }
}

export function moveRightCharacter(){
  return{
    type: types.MOVE_RIGHT_CHARACTER
  }
}

export function moveLeftCharacter(){
  return{
    type: types.MOVE_LEFT_CHARACTER
  }
}