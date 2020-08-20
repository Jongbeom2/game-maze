import React from 'react';
import styled from "styled-components";
const Box = styled.div`
  position: absolute;
  box-sizing: border-box;
  border: 1px solid black;
  width: ${props=>props.size}rem;
  height: ${props=>props.size}rem;
  top: ${props=>props.y}rem;
  left: ${props=>props.x}rem;
  background: ${props=>props.isEmpty?'white':'red'};
`;
const Typography = styled.p`
  margin-left: 2rem;
  margin-top: 2rem;
`;
function Map(props) {
  console.log(props.mapInfo);
  return (
    <div>
      <Typography>Map</Typography>
      {props.mapInfo.map(rowEle=>
        rowEle.map(ele=>
          <Box x={ele.x} y={ele.y} size={ele.size} isEmpty={ele.isEmpty}></Box>
        )
      )}
    </div>
  );
}

export default Map;
