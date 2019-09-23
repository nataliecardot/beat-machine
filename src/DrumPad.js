import React from 'react';

// Destructuring used to pass props (see https://www.youtube.com/watch?v=CFUysPqYC4Y)
const DrumPad = ({ id, letter, src }) => {

  return (
    <div id={id}>
      <p>{letter}</p>
      <audio id={letter} src={src}></audio>
    </div>
  );
}

export default DrumPad;