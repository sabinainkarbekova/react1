import React, { useState } from "react";

function Time() {
  const [count, setCount] = useState(0);
  const [Counting, SetCounting] = useState(false);

  function Start() {
    if (Counting) return;
    SetCounting(true);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current === 10) {
        clearInterval(interval);
        SetCounting(false);
      }
    }, 1000);
  }

  return (
    <div>
      <h1 >{count}</h1>
      <button
        onClick={Start}
        disabled={Counting}
      >
        Начать 
      </button>
    </div>
  );
}

export default Time;
