// components/BotCard.js

import React from 'react';

const BotCard = ({ bot }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => console.log('Enlist bot:', bot.id)}>Enlist</button>
    </div>
  );
};

export default BotCard;
