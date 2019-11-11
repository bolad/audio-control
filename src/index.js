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
