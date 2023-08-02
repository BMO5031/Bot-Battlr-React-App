import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const BotProfile = ({ bot, handleBotClick }) => {
  return (
    <div>
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => handleBotClick(bot)}>Click Me</button>
    </div>
  );
};

// Prop type validation
BotProfile.propTypes = {
  bot: PropTypes.object.isRequired,
  handleBotClick: PropTypes.func.isRequired,
};

export default BotProfile;
