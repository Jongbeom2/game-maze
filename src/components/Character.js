import React, { useEffect } from "react";
import CharacterImg from "../character.jpg";
import styled from "styled-components";
import { START_X, START_Y, SIZE } from "../config";

const Img = styled.img`
  position: absolute;
  box-sizing: border-box;
  top: ${(props) => {
    return START_Y + SIZE * props.characterY;
  }}rem;
  left: ${(props) => START_X + SIZE * props.characterX}rem;
  height: ${SIZE}rem;
  width: ${SIZE}rem;
`;
function Character(props) {
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  useEffect(() => {
    if (
      props.characterX === props.widthSize - 1 &&
      props.characterY === props.heightSize - 1
    ) {
      alert("Game Over");
      props.reStartGame();
    }
  });
  const onKeyDown = (e) => {
    switch (e.keyCode) {
      case 38:
        props.onKeyDownUp();
        break;
      case 40:
        props.onKeyDownDown();
        break;
      case 37:
        props.onKeyDownLeft();
        break;
      case 39:
        props.onKeyDownRight();
        break;
      default:
        break;
    }
  };
  return (
    <Img
      src={CharacterImg}
      characterX={props.characterX}
      characterY={props.characterY}
    />
  );
}

export default Character;
