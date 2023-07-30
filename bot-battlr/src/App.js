import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    // Fetch bots data from the server
    axios.get('http://localhost:3000/bots')
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle bot enlistment
  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Function to handle bot release
  const releaseBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);
  };

  // Function to handle bot discharge
  const dischargeBot = (bot) => {
    // Remove the bot from the backend server
    axios.delete(`http://localhost:3000/bots/${bot.id}`)
      .then(() => {
        // Remove the bot from the enlistedBots state
        releaseBot(bot);
      })
      .catch((error) => {
        console.error('Error discharging bot:', error);
      });
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <h2>Bot Collection</h2>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <h2>Your Bot Army</h2>
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
