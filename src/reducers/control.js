import * as types from "../actions/ActionTypes";
const START_X = 2;
const START_Y = 9;
const SIZE = 5;
const initialState = {
  widthSize: 2,
  heightSize: 2,
  probability: 25,
  mapInfo: [
    [
      { x: START_X, y: START_Y, size: SIZE, isEmpty: true },
      { x: START_X + SIZE, y: START_Y, size: SIZE, isEmpty: true },
    ],
    [
      { x: START_X, y: START_Y + SIZE, size: SIZE, isEmpty: false },
      { x: START_X + SIZE, y: START_Y + SIZE, size: SIZE, isEmpty: true },
    ],
  ],
};
const getIsEmpty = (probability)=>{
  const value = Math.random()*100;
  console.log(value,parseInt(probability))
  if(value>parseInt(probability)){
    return true;
  }else{
    return false;
  }
}
export default function control(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_WIDTH_SIZE:
      return {
        ...state,
        widthSize: action.widthSize,
      };
    case types.CHANGE_HEIGHT_SIZE:
      return {
        ...state,
        heightSize: action.heightSize,
      };
    case types.CHANGE_PROBABILITY:
      return{
        ...state,
        probability: action.probability
      }
    case types.CLICK_CREATE_BTN:
      const mapInfo = [];
      for (let i = 0; i < state.heightSize; i++) {
        const tempInfo = [];
        for (let j = 0; j < state.widthSize; j++) {
          tempInfo.push({
            x: START_X + j * SIZE,
            y: START_Y + i * SIZE,
            size: SIZE,
            isEmpty: ((i===0&&j===0)||(i===state.heightSize-1&&j===state.widthSize-1))?true:getIsEmpty(state.probability),
          });
        }
        mapInfo.push(tempInfo);
      }
      return {
        ...state,
        mapInfo,
      };
    default:
      return state;
  }
}
