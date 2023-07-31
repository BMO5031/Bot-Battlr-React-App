import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from './components/YourBotArmy';
import './App.css';

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlist = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
    console.log(enlistedBots); // Add this line to check if enliste
  };

  const handleBotRelease = (bot) => {
    setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
  };

  const handleBotDischarge = (bot) => {
    // Your discharge logic goes here
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <div className="app-content">
        <BotCollection onEnlist={handleEnlist} /> {/* Pass handleEnlist to BotCollection */}
        <YourBotArmy 
          enlistedBots={enlistedBots}
          onRelease={handleBotRelease}
          onDischarge={handleBotDischarge}
          key="your-bot-army" // Provide a unique key prop
        />
      </div>
    </div>
  );
};

export default App;
