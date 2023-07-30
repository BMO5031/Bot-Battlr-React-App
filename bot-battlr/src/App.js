// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

const App = () => {
  // State to hold the list of bots
  const [bots, setBots] = useState([]);

  // State to hold the enlisted bots
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Fetch bot data from the server using useEffect
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bots');
        setBots(response.data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };
    fetchBots();
  }, []);

  // Function to enlist a bot into the army
  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Function to release a bot from the army
  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  // Function to delete a bot
  const deleteBot = async (bot) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${bot.id}`);
      setBots(bots.filter((b) => b.id !== bot.id));
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  return (
    <div>
      {/* Display the enlisted bots */}
      <YourBotArmy
        armyBots={enlistedBots}
        onRelease={releaseBot}
      />
      {/* Display the available bots */}
      <BotCollection
        bots={bots}
        onEnlist={enlistBot}
        onDelete={deleteBot}
      />
    </div>
  );
};

export default App;
