// components/BotCollection.js

import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
