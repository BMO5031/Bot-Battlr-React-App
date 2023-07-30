// src/components/BotCollection.js

import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, onEnlist, onDelete }) => {
  return (
    <div>
      <h2>All Bots</h2>
      {/* Map through bots and render BotCard for each bot */}
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onEnlist={() => onEnlist(bot)}
          onDelete={() => onDelete(bot.id)}
        />
      ))}
    </div>
  );
};

export default BotCollection;
