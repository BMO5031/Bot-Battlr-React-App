// components/BotCollection.js

import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, enlistBot, yourBotArmy }) => {
  const isBotEnlisted = (botId) => {
    return yourBotArmy.some((bot) => bot.id === botId);
  };

  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            enlistBot={enlistBot}
            dischargeBot={isBotEnlisted(bot.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
