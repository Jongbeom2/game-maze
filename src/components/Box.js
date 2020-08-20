import React from "react";

function Box(props) {
  const style = {
    background: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`,
    width: '100px',
    height: '100px'
  };
  return (
    <div style = {style}>
      Box
    </div>
  );
}

export default Box;
