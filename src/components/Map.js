import React from 'react';
import styled from "styled-components";
const Box = styled.div`
  position: absolute;
  box-sizing: border-box;
  border: 1px solid black;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  top: ${props => props.y}rem;
  left: ${props => props.x}rem;
  background: ${props =>{
    if(props.isEnd){
      return 'green';
    }else{
      return props.isEmpty ? 'white' : 'red'}
    }
  };
`;
const Typography = styled.p`
  margin-left: 2rem;
  margin-top: 2rem;
`;
function Map(props) {
  return (
    <div>
      <Typography>Map</Typography>
      {props.mapInfo.map((rowEle, yIdx) =>
        rowEle.map((ele, xIdx) =>
          <Box
            x={ele.x}
            y={ele.y}
            key={yIdx*rowEle.length+xIdx}
            size={ele.size}
            isEnd={(yIdx === props.mapInfo.length - 1)&&(xIdx === rowEle.length-1)}
            isEmpty={ele.isEmpty}></Box>
        )
      )}
    </div>
  );
}

export default Map;
