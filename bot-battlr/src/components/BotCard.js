// components/BotCard.js

import React from 'react';

const BotCard = ({ bot, enlistBot, dischargeBot }) => {
  const handleEnlist = () => {
    enlistBot(bot.id);
  };

  const handleDischarge = () => {
    dischargeBot(bot.id);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {dischargeBot ? (
        <button onClick={handleDischarge}>Discharge</button>
      ) : (
        <button onClick={handleEnlist}>Enlist</button>
      )}
    </div>
  );
};

export default BotCard;
