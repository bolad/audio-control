import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Control = ({
  value,
  children,
  onIncrease,
  onDecrease
}) => (
  <div className="control">
    <button onClick={onDecrease}>&ndash;</button>
    <div>
      <span> className="value">{value}</span>
      <span> className="label">{children}</span>
    </div>
    <button onClick={onIncrease}>+</button>
  </div>
);

// This version of the component stores its state as 4 separate variables
const AudioControlsWithMultipleVariables = () => {
  const [volume, setVolume] = useState(47);
  const [treble, setTreble] = useState(13);
  const [mid, setMid] = useState(35);
  const [bass, setBass] = useState(50);

  return (
    <div className="audio-controls">
      <Control
        value={volume}
        onIncrease={() => setVolume(volume + 1)}
        onDecrease={() => setVolume(volume - 1)}
      >
        VOLUME
      </Control>
    </div>
  );
};

ReactDOM.render(
  <>
    <h1>With Multiple Variables</h1>
    <AudioControlsWithMultipleVariables />
  </>,
  document.querySelector('#root')
);
