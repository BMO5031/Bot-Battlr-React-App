import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    // Fetch data from the backend server
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = (botId) => {
    const selectedBot = bots.find((bot) => bot.id === botId);

    if (!yourBotArmy.some((bot) => bot.id === botId)) {
      setYourBotArmy([...yourBotArmy, selectedBot]);
    }
  };

  const releaseBot = (botId) => {
    const updatedArmy = yourBotArmy.filter((bot) => bot.id !== botId);
    setYourBotArmy(updatedArmy);
  };

  const deleteBotForever = (botId) => {
    // Implement your logic to permanently delete the bot
    // For example, you can make an API call to delete the bot from the server
    // and then update the state to remove the bot from yourBotArmy
    // (This logic depends on your backend and database setup)
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className="sort-and-filter">
        <h2>All Bots</h2>
        {/* Pass the enlistBot function to BotCollection */}
        <BotCollection bots={bots} enlistBot={enlistBot} />
      </div>
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <YourBotArmy bots={yourBotArmy} releaseBot={releaseBot} deleteBotForever={deleteBotForever} />
      </div>
    </div>
  );
};

export default App;
