import React, { useState } from "react";
import "./App.css";

function App() {
  const [planetsDestroyed, setPlanetsDestroyed] = useState(0);
  const [coins, setCoins] = useState(0);
  const planetsPerClick = 12;

  const handleDestroyPlanet = () => {
    if (planetsDestroyed > 100) {
      setPlanetsDestroyed(planetsDestroyed + planetsPerClick + 100);
    } else {
      setPlanetsDestroyed(planetsDestroyed + planetsPerClick);
    }
    if (coins > 15) {
      setCoins(coins + 50);
    } else {
      setCoins(coins + 1);
    }
  };

  const handleReset = () => {
    setPlanetsDestroyed(0);
    setCoins(0);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>The Death Star</h1>
      </header>
      <main>
        <h2>{planetsDestroyed}</h2>
        <p>Planets Destroyed</p>
        <button onClick={handleDestroyPlanet} className="destroy-button">
          Destroy Planet
        </button>
        <p>{planetsPerClick} planets per click</p>
        <div className="coins">
          <span>🪙</span> x {coins}
        </div>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </main>
    </div>
  );
}

export default App;
