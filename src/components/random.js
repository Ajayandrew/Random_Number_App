import React, { useState } from "react";
import "./random.css";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [time, setTime] = useState("");

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);

    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  return (
    <div className="random-container">
      <div className="random-card">
        <h1 className="title">🎲 Random Number Generator</h1>
       
        <div className="number-box">
          {randomNumber === null ? (
            <p className="placeholder">❌ No number generated yet</p>
          ) : (
            <h2 className="number">✨ {randomNumber} ✨</h2>
          )}
        </div>

        {randomNumber !== null && (
          <p className="time-text">🕒 Generated at : {time}</p>
        )}

        <button className="generate-btn" onClick={generateNumber}>
           Generate Random Number
        </button>

        {randomNumber !== null && (
          <p className="hint">Click again to generate a new number!</p>
        )}
      </div>
    </div>
  );
};

export default RandomNumber;
