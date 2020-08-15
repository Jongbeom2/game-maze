import React from "react";

function Control() {
  const onClickPlus = () => {
    console.log("+");
  };
  const onClickMinus = () => {
    console.log("-");
  };
  const onClickChangeBg = () => {
    console.log("Change bg");
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
