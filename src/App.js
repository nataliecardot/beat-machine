import React, { useState } from 'react';
import './App.scss';
import DrumPad from './DrumPad';

const sounds = [
  {
    id: 'snare',
    letter: 'Q',
    src: 'https://audio.jukehost.co.uk/5635ca67fded31f2b0f3a14e310fb6e15995d2df/a88fd649f51'
  },
  {
    id: 'shotgun reload',
    letter: 'W',
    src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav'
  },
  {
    id: 'bass kick',
    letter: 'E',
    src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%203-888-Free-Loops.com.mp3'
  },
  {
    id: 'tom-tom',
    letter: 'A',
    src: 'http://www.denhaku.com/r_box/linn/midtom.wav'
  },
  {
    id: 'pryda snare',
    letter: 'S',
    src: 'https://audio.jukehost.co.uk/5635ca67fded31f2b0f3a14e310fb6e15995d2df/b3e9cabb008'
  },
  {
    id: 'kick drum',
    letter: 'D',
    src: 'https://audio.jukehost.co.uk/5635ca67fded31f2b0f3a14e310fb6e15995d2df/8b233ccfd7a'
  },
  {
    id: 'closed hi-hat',
    letter: 'Z',
    src:
      'https://audio.jukehost.co.uk/5635ca67fded31f2b0f3a14e310fb6e15995d2df/0e579fff2af'
  },
  {
    id: 'clap',
    letter: 'X',
    src: 'https://audio.jukehost.co.uk/5635ca67fded31f2b0f3a14e310fb6e15995d2df/2c8b0d9d3a2'
  },
  {
    id: 'open hi-hat',
    letter: 'C',
    src: 'https://audio.jukehost.co.uk/5635ca67fded31f2b0f3a14e310fb6e15995d2df/6ae4bf4aa52'
  }
];

const App = () => {

  const [display, setDisplay] = useState('');
  const [soundTriggered, setSoundTriggered] = useState(false);

  const handleDisplay = display => {
    setSoundTriggered(true);
    setDisplay(display);
  }

  return (
    <div className='App'>
      <div className='drum-machine'>
        <div className='display'>
          {!soundTriggered ? <p className="start-text">Tap a beat to start playing.</p> : null}
          <p className='sound-name'>{display}</p>
        </div>
        <div className='drum-pads'>
          {sounds.map(sound => (
            <DrumPad
              key={sound.id}
              id={sound.id}
              letter={sound.letter}
              src={sound.src}
              handleDisplay={handleDisplay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
