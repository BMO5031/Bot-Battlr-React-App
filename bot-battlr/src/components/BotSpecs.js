// components/BotSpecs.js

import React from 'react';

const BotSpecs = ({ bot, enlistBot, goBack }) => {
  return (
    <div className="bot-specs">
      <h2>Bot Details</h2>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <button onClick={() => enlistBot(bot.id)}>Enlist</button>
        <button onClick={goBack}>Back to List</button>
      </div>
    </div>
  );
};

export default BotSpecs;

