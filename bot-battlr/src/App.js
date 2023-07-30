// App.js
import React from 'react';
import './App.css';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Bot Battlr</h1>
      </header>
      <main>
        <BotCollection />
        <YourBotArmy />
      </main>
    </div>
  );
}

export default App;
