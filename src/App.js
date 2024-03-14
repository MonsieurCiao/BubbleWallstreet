import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './Body';
import Upgrades from './Upgrades';

function App() {
  const [score, setScore] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);
  const [perSec, setPerSec] = useState(0);
  const [incrementTexts, setIncrementTexts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((currentScore) => currentScore + perSec / 50);
    }, 20);
    return () => clearInterval(interval);
  }, [perSec]);

  const handleCookieClick = (e) => {
    setScore((currentScore) => currentScore + incrementAmount);
    const newIncrementText = {
      id: Math.random(),
      x: e.clientX - 10, 
      y: e.clientY - 20,
      amount: incrementAmount,
    };
    setIncrementTexts((prev) => [...prev, newIncrementText]);

    setTimeout(() => {
      setIncrementTexts((prev) => prev.filter(text => text.id !== newIncrementText.id));
    }, 500); 
  };
  const buyUpgrade = (price, increasePerSec) => {
    if (score >= price) {
      setScore(score - price);
      setPerSec(perSec + increasePerSec);
    } 
  };
  

  return (
    <>
      <Body score={Math.floor(score)} handleCookieClick={handleCookieClick} perSec={Math.round(perSec)} incrementTexts={incrementTexts} />
      <Upgrades score={Math.floor(score)} setScore={setScore} setPerSec={setPerSec} buyUpgrade={buyUpgrade}/>
    </>
  );
}

export default App;
