import React from 'react';
function Value(props) {
  return (
    <div>
      <h1>{props.number ==='undefined'?-1:props.number}</h1>
    </div>
  );
}

export default Value;
