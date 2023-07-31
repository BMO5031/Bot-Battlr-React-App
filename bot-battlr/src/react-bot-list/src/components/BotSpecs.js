// BotSpecs.js
import React from 'react';
import './BotSpecs.css';

const BotSpecs = ({ bot, onBackClick, onEnlistClick }) => {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h2>{bot.name}</h2>
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Health:</strong> {bot.health}
      </p>
      <p>
        <strong>Damage:</strong> {bot.damage}
      </p>
      <p>
        <strong>Armor:</strong> {bot.armor}
      </p>
      <p>{bot.catchphrase}</p>
      <button onClick={onBackClick}>Back to List</button>
      <button onClick={() => onEnlistClick(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
