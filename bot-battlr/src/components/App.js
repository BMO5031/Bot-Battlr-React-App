// components/App.js

import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import { fetchBots } from '../services/botService';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);


  useEffect(() => {
    fetchBots()
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="app">
      <h1>Welcome to Bot Battlr</h1>
      <BotCollection bots={bots} />
      <YourBotArmy yourBotArmy={yourBotArmy} />
    </div>
  );
};

export default App;
