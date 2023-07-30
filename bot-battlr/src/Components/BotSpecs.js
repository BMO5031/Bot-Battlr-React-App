// BotSpecs.js

import React from 'react';

const BotSpecs = ({ bot, goBackToList, enlistBot }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name} - {bot.class}</h2>
      {/* Display other detailed information about the bot */}
      <button onClick={goBackToList}>Back to List</button>
      <button onClick={() => enlistBot(bot.id)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
