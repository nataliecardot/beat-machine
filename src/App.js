import React, { useState } from 'react';
import './App.scss';
import DrumPad from './DrumPad';

const sounds = [
  {
    id: 'snare',
    letter: 'Q',
    keycode: 81,
    src:
      'https://www.myinstants.com/media/sounds/snare.mp3'
  },
  {
    id: 'bass boost',
    letter: 'W',
    keycode: 87,
    src: 'https://www.myinstants.com/media/sounds/bass-boost_oJjgiYr.mp3'
  },
  {
    id: 'bass kick',
    letter: 'E',
    keycode: 69,
    src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%203-888-Free-Loops.com.mp3'
  },
  {
    id: 'tom-tom',
    letter: 'A',
    keycode: 65,
    src: 'http://www.denhaku.com/r_box/linn/midtom.wav'
  },
  {
    id: 'shotgun reload',
    letter: 'S',
    keycode: 83,
    src:
      'http://david.guerrero.free.fr/Effects/ShotgunReload.wav'
  },
  {
    id: 'cymbal',
    letter: 'D',
    keycode: 68,
    src: 'https://www.myinstants.com/media/sounds/vdub1-crash-18.mp3'
  },
  {
    id: 'closed hi-hat',
    letter: 'Z',
    keycode: 90,
    src:
      'https://www.myinstants.com/media/sounds/behemoth-closed-26_4fwxFnC.mp3'
  },
  {
    id: 'clap',
    letter: 'X',
    keycode: 88,
    src: 'https://www.myinstants.com/media/sounds/clap.mp3'
  },
  {
    id: 'open hi-hat',
    letter: 'C',
    keycode: 67,
    src:
      'https://www.myinstants.com/media/sounds/vdub1-op-hihat-010_5elr79H.mp3'
  }
];

const App = () => {

  const [display, setDisplay] = useState('');

  const handleDisplay = display => {
    setDisplay(display);
  }

  return (
    <div className='App'>
      <div className='drum-machine'>
        <div className='display'>
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
