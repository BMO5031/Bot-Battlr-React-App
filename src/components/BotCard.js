import React from 'react';

const BotCard = ({ bot, enlistBot }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      {/* Add the enlist button */}
      <button onClick={() => enlistBot(bot.id)}>Enlist</button>
    </div>
  );
};

export default BotCard;
