import * as types from "../actions/ActionTypes";
import {START_X, START_Y, SIZE, DEFAULT_WIDTH_SIZE,DEFAULT_HEIGHT_SIZE,DEFAULT_PROBABILITY} from '../config';
// 맵의 가로 사이즈, 세로 사이즈, 확률을 이용하여 맵을 생성하고 반환
const getMapInfo = (widthSize, heightSize, probability) => {
  const mapInfo = [];
  for (let i = 0; i < heightSize; i++) {
    const tempInfo = [];
    for (let j = 0; j < widthSize; j++) {
      tempInfo.push({
        x: START_X + j * SIZE,
        y: START_Y + i * SIZE,
        size: SIZE,
        isEmpty: ((i===0&&j===0)||(i===heightSize-1&&j===widthSize-1))?true:getIsEmpty(probability),
      });
    }
    mapInfo.push(tempInfo);
  }
  return mapInfo
}
// 확률을 이용하여 비어있는지 여부를 반환
const getIsEmpty = (probability)=>{
  const value = Math.random()*100;
  if(value>parseInt(probability)){
    return true;
  }else{
    return false;
  }
}
const initialState = {
  widthSize: DEFAULT_WIDTH_SIZE,
  heightSize: DEFAULT_HEIGHT_SIZE,
  probability: DEFAULT_PROBABILITY,
  mapInfo: getMapInfo(DEFAULT_WIDTH_SIZE,DEFAULT_HEIGHT_SIZE,DEFAULT_PROBABILITY)
};
export default function control(state = initialState, action) {
  console.log(state);
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
      const mapInfo = getMapInfo(state.widthSize,state.heightSize,state.probability)
      return {
        ...state,
        mapInfo,
      };
    default:
      return state;
  }
}
