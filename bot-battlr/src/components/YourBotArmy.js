// components/YourBotArmy.js

import React from 'react';

const YourBotArmy = ({ yourBotArmy, releaseBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {yourBotArmy.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => releaseBot(bot.id)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
