import React, { useState } from 'react';
import './App.scss';
import DrumPad from './DrumPad';

import snare from './sounds/snare.mp3';
import shotgunReload from './sounds/shotgun-reload.wav';
import bassKick from './sounds/bass-kick.mp3';
import tomTom from './sounds/tom-tom.wav';
import prydaSnare from './sounds/pryda-snare.mp3';
import kickDrum from './sounds/kick-drum.mp3';
import closedHiHat from './sounds/closed-hi-hat.mp3';
import clap from './sounds/clap.mp3';
import openHiHat from './sounds/open-hi-hat.mp3';

const sounds = [
  {
    id: 'snare',
    letter: 'Q',
    src: snare
  },
  {
    id: 'shotgun reload',
    letter: 'W',
    src: shotgunReload
  },
  {
    id: 'bass kick',
    letter: 'E',
    src: bassKick
  },
  {
    id: 'tom-tom',
    letter: 'A',
    src: tomTom
  },
  {
    id: 'pryda snare',
    letter: 'S',
    src: prydaSnare
  },
  {
    id: 'kick drum',
    letter: 'D',
    src: kickDrum
  },
  {
    id: 'closed hi-hat',
    letter: 'Z',
    src: closedHiHat
  },
  {
    id: 'clap',
    letter: 'X',
    src: clap
  },
  {
    id: 'open hi-hat',
    letter: 'C',
    src: openHiHat
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
