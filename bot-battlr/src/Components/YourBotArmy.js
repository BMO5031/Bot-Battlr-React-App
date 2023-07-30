// YourBotArmy.js
import React, { useState } from 'react';

const YourBotArmy = () => {
  const [yourBots, setYourBots] = useState([]);

  // Function to handle enlisting a bot
  const enlistBot = (bot) => {
    // Add the bot to yourBots array
    setYourBots([...yourBots, bot]);
  };

  // Function to handle releasing a bot
  const releaseBot = (bot) => {
    // Remove the bot from yourBots array
    setYourBots(yourBots.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
          {/* Add a button to release the bot */}
          <button onClick={() => releaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;