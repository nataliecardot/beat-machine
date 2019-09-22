import React from 'react';

const DrumPad = (props) => {

  return (
    <div id={props.id}>
      <p>{props.letter}</p>
    </div>
  );
}

export default DrumPad;