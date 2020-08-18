import React from "react";
import Control from "./Control";
import Value from "./Value";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
function Counter(props) {
  const setBg = () => {
    props.changeBg([
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
    ]);
  };
  const style = {
    background: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`
  };
  return (
    <div style = {style}>
      <Value number={props.number} />
      <Control
        onPlus={props.increment}
        onMinus={props.decrement}
        onChangeBg={setBg}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
