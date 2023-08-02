import React from 'react';

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => enlistBot(bot.id)}>Enlist</button>
      {/* Add a button to go back to the list view */}
      <button onClick={() => window.location.reload()}>Go Back</button>
    </div>
  );
};

export default BotSpecs;
