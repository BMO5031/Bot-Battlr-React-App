// BotCard.js

import React, { useState } from 'react';
import BotSpecs from './BotSpecs';

const BotCard = ({ bot, buttonText, buttonAction, dischargeAction }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  const toggleSpecs = () => {
    setShowSpecs(!showSpecs);
  };

  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {/* Display other basic information about the bot */}
      {showSpecs ? (
        <BotSpecs
          bot={bot}
          goBackToList={toggleSpecs}
          enlistBot={buttonAction}
        />
      ) : (
        <button onClick={toggleSpecs}>{buttonText}</button>
      )}
      {dischargeAction && <button onClick={() => dischargeAction(bot.id)}>Discharge</button>}
    </div>
  );
};

export default BotCard;
