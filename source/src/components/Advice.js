import React from 'react';
import desktopDevider from '../images/pattern-divider-desktop.svg';
import dice from '../images/icon-dice.svg';

export function Advice(props) {
  return (
    <div className="inner-container">
      <h1>advice #{props.data.id}</h1>
      <p>{props.data.advice}</p>
      <img className="decorative-line" src={desktopDevider} alt="just-a-line" />

      <button onClick={props.toggleData} className="dice-button">
        <img className='dice-image' src={dice} alt="dice" />
      </button>
    </div>
  );
}
