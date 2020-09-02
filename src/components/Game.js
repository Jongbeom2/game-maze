import React from "react";
import Control from "./Control";
import Map from "./Map";
import Character from "./Character";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
function Game(props) {
  return (
    <div>
      <Control
        onChangeWidthSize={props.changeWidthSize}
        onChangeHeightSize={props.changeHeightSize}
        onChangeProbability={props.changeProbability}
        onClickCreateBtn={props.clickCreateBtn}
      />
      <Map mapInfo={props.mapInfo} />
      <Character
        reStartGame={props.clickCreateBtn}
        characterX={props.characterX}
        characterY={props.characterY}
        widthSize={props.widthSize}
        heightSize={props.heightSize}
        onKeyDownUp={props.moveUpCharacter}
        onKeyDownDown={props.moveDownCharacter}
        onKeyDownLeft={props.moveLeftCharacter}
        onKeyDownRight={props.moveRightCharacter}
        checkGameOver={props.checkGameOver}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    widthSize: state.control.widthSize,
    heightSize: state.control.heightSize,
    mapInfo: state.control.mapInfo,
    characterX: state.control.characterX,
    characterY: state.control.characterY,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
// mapStateToProps 옵션을 사용하지 않으면 항상 store.getState를 통해 state에 접근해야함.
// 옵션을 사용하여 Counter의 props에서 state에 접근할 수 있음.

// mapDispatchToProps 옵션을 사용하지 않으면 항상 store.dispatch를 통해 어떤 type의 action이고 그 action에 어떤 값이 필요한지 전달해야함.
// 옵션을 사용하여 Counter의 props에 dispatch에 접근할 수 있음. type을 입력할 필요없이 정의한 함수 자체에 접근할 수 있고 인자를 직접 전달할 수 있음.

// dispatch는 action의 type을 받아 reducer에서 type에 해당하는 함수를 호출하고 인자를 전달함.
// reducer는 받은 인자를 이용하여 type에 따라 state를 변경함.
export default connect(mapStateToProps, mapDispatchToProps)(Game);
