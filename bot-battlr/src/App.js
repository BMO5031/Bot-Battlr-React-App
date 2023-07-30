// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

function App() {
  // State to hold the fetched bot data
  const [bots, setBots] = useState([]);

  // Fetch data from the local server when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:3001/bots')
      .then((response) => setBots(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Welcome to Bot Battlr</h1>
      </header>
      <main>
        <BotCollection bots={bots} />
        <YourBotArmy />
      </main>
    </div>
  );
}

export default App;
