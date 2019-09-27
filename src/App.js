import React, { useState } from 'react';
import './App.scss';
import DrumPad from './DrumPad';

const sounds = [
  {
    id: 'snare',
    letter: 'Q',
    src: 'https://www.myinstants.com/media/sounds/snare.mp3'
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
    src:
      'https://www.myinstants.com/media/sounds/prydasnare.mp3'
  },
  {
    id: 'kick drum',
    letter: 'D',
    src: 'https://www.myinstants.com/media/sounds/vdub1-kick-006.mp3'
  },
  {
    id: 'closed hi-hat',
    letter: 'Z',
    src:
      'https://www.myinstants.com/media/sounds/behemoth-closed-26_4fwxFnC.mp3'
  },
  {
    id: 'clap',
    letter: 'X',
    src: 'https://www.myinstants.com/media/sounds/clap.mp3'
  },
  {
    id: 'open hi-hat',
    letter: 'C',
    src:
      'https://www.myinstants.com/media/sounds/vdub1-op-hihat-010_5elr79H.mp3'
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
          {!soundTriggered ? <p className="start-text">Select the keys to play sounds.</p> : null}
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
