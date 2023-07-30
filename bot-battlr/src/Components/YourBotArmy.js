// src/components/YourBotArmy.js

import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ armyBots, onRelease }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {/* Map through armyBots and render BotCard for each enlisted bot */}
      {armyBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onRelease={() => onRelease(bot)}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
