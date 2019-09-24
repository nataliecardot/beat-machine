import React, { useState } from 'react';
import './App.scss';
import DrumPad from './DrumPad';

const sounds = [
  {
    id: 'snare',
    letter: 'Q',
    keycode: 81,
    src:
      'http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/12-ambient%20wood%20snr.wav'
  },
  {
    id: 'bass',
    letter: 'W',
    keycode: 87,
    src: 'http://www.denhaku.com/r_box/sr16/sr16bd/tightdbl.wav'
  },
  {
    id: 'shotgun',
    letter: 'E',
    keycode: 69,
    src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav'
  },
  {
    id: 'tom-tom',
    letter: 'A',
    keycode: 65,
    src: 'http://www.denhaku.com/r_box/linn/midtom.wav'
  },
  {
    id: 'bass kick',
    letter: 'S',
    keycode: 83,
    src:
      'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%203-888-Free-Loops.com.mp3'
  },
  {
    id: 'high hat',
    letter: 'D',
    keycode: 68,
    src: 'http://www.denhaku.com/r_box/rx11/hh_open_1.wav'
  },
  {
    id: 'side stick',
    letter: 'Z',
    keycode: 90,
    src:
      'http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/17-side%20stick%20snare.wav'
  },
  {
    id: 'clap',
    letter: 'X',
    keycode: 88,
    src: 'http://www.denhaku.com/r_box/linn/clap.wav'
  },
  {
    id: 'closed high hat',
    letter: 'C',
    keycode: 67,
    src:
      'http://www.randomthink.net/labs/html5drums/drumkit/Hi%20Hat%20Closed.wav'
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
