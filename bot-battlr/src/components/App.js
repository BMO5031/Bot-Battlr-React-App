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

  // Function to enlist a bot
  const enlistBot = (botId) => {
    const botToAdd = bots.find((bot) => bot.id === botId);
    setYourBotArmy([...yourBotArmy, botToAdd]);
  };

  // Function to release a bot
  const releaseBot = (botId) => {
    const updatedArmy = yourBotArmy.filter((bot) => bot.id !== botId);
    setYourBotArmy(updatedArmy);
  };

  // Function to discharge a bot (delete from frontend and backend)
  const dischargeBot = async (botId) => {
    try {
      // Delete the bot from the backend
      await fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE',
      });

      // Remove the bot from yourBotArmy state (frontend)
      const updatedArmy = yourBotArmy.filter((bot) => bot.id !== botId);
      setYourBotArmy(updatedArmy);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="app">
      <h1>Welcome to Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} yourBotArmy={yourBotArmy} />
      <YourBotArmy yourBotArmy={yourBotArmy} releaseBot={releaseBot} />
    </div>
  );
};

export default App;
