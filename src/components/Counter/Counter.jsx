import React from 'react'
import "./Counter.scss"
import { useState,useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
  
    useEffect(() => {
      document.body.className = darkMode ? "dark-mode" : "light-mode";
    }, [darkMode]);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div className={`counter-container ${darkMode ? "dark" : "light"}`}>
    <div className="toggle-mode" onClick={toggleDarkMode}>
      {darkMode ? "🌙" : "☀️"}
    </div>
    <h1>Counter</h1>
    <div className="count-display">{count}</div>
    <div className="button-container">
      <button className="dec-btn" onClick={decrement}>DEC</button>
      <button className="inc-btn" onClick={increment}>INC</button>
    </div>
  </div>
  )
}

export default Counter