import React from 'react';

// Destructuring used to pass props (see https://www.youtube.com/watch?v=CFUysPqYC4Y)
// 'props' is the convention for the first argument passed to component, but could be named anything
// Effectively, { letter } = arguments[0])
const DrumPad = ({ id, letter }) => {

  return (
    <div id={id}>
      <p>{letter}</p>
    </div>
  );
}

export default DrumPad;