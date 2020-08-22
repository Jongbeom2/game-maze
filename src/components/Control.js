import React from "react";
import styled from "styled-components";
import { DEFAULT_WIDTH_SIZE, DEFAULT_HEIGHT_SIZE, DEFAULT_PROBABILITY } from '../config';
const TextField = styled.input`
  height: 1.5rem;
  width: 5rem;
  box-sizing: border-box;
  margin-right: 1rem;
`;
const Typography = styled.p`
  height: 1.5rem;
  line-height: 1.5rem;
  width: 2rem;
  margin-right: 1rem;
`;
const Button = styled.button`
  height: 1.5rem;
  line-height: 1.5rem;
  width: 5rem;
  margin-right: 1rem;
`;
const HorizontalDiv = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;
`;
function Control(props) {
  const onClickCreateBtn = () => {
    props.onClickCreateBtn();
  };
  const onChangeWidthSize = (e) => {
    props.onChangeWidthSize(e.target.value);
  };
  const onChangeHeightSize = (e) => {
    props.onChangeHeightSize(e.target.value);
  }
  const onChangeProbability = (e) => {
    props.onChangeProbability(e.target.value);
  }
  return (
    <HorizontalDiv>
      <Typography> 가로 </Typography>
      <TextField onChange={onChangeWidthSize} defaultValue={DEFAULT_WIDTH_SIZE} />
      <Typography> 세로 </Typography>
      <TextField onChange={onChangeHeightSize} defaultValue={DEFAULT_HEIGHT_SIZE} />
      <Typography> 확률 </Typography>
      <TextField onChange={onChangeProbability} defaultValue={DEFAULT_PROBABILITY} />
      <Button onClick={onClickCreateBtn}>생성</Button>
    </HorizontalDiv>
  );
}

export default Control;
