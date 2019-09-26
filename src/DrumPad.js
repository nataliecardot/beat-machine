import React, { useEffect } from 'react';

// Destructuring used to pass props (see https://www.youtube.com/watch?v=CFUysPqYC4Y)
const DrumPad = ({ id, letter, src, handleDisplay }) => {

  let audio = React.createRef();

  // Effect Hook. Like componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods combined. Runs after each render
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    // Cleanup (adding and removing is closely related, so a feature of useEffect is that this logic can be kept together. Every effect can optionally return a cleanup function that cleans up after it)
    return () => document.removeEventListener('keydown', handleKeydown);
  });

  const handleClick = () => {
    audio.current.play();
    handleDisplay(id);
  }

  const handleKeydown = e => {
    if (e.keyCode === letter.charCodeAt()) {
      audio.current.play();
      handleDisplay(id);
    }
  }

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={handleClick}
    >
      <p className="letter">{letter}</p>
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