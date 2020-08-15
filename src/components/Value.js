import React from 'react';

function Value(props) {
  return (
    <div>
      <h1>{props.number || -1}</h1>
    </div>
  );
}

export default Value;
