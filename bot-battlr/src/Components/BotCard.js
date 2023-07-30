import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BotCard = ({ bot, onEnlist, onRelease, onDelete }) => {
  return (
    <div className="bot-card">
      {/* Display bot information */}
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      {/* Show different buttons based on the context (BotCollection or YourBotArmy) */}
      {onEnlist && <button onClick={onEnlist}>Enlist</button>}
      {onRelease && <button onClick={onRelease}>Release</button>}
      {onDelete && (
        <button onClick={() => onDelete(bot.id)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  );
};

export default BotCard;
