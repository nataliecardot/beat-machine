import React from 'react';

// Destructuring used to pass props (see https://www.youtube.com/watch?v=CFUysPqYC4Y)
const DrumPad = ({ id, letter, src }) => {

  let audio = React.createRef();

  const handleClick = () => {
    audio.current.play();
    audio.current.currentTime = 0;
  }

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={handleClick}
    >
      <p>{letter}</p>
      <audio
        ref={audio}
        id={letter}
        src={src}
      >
      </audio>
    </div>
  );
}

export default DrumPad;