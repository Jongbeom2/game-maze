import React from "react";

function Control(props) {
  const onClickPlus = () => {
    props.onPlus();
  };
  const onClickMinus = () => {
    props.onMinus();
  };
  const onClickChangeBg = () => {
    props.onChangeBg();
  };
  return (
    <div>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
      <button onClick={onClickChangeBg}>Change Background</button>
    </div>
  );
}

export default Control;
