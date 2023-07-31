// components/BotCard.js

import React, { useState } from 'react';
import BotSpecs from './BotSpecs';

const BotCard = ({ bot, enlistBot }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleEnlist = () => {
    enlistBot(bot.id);
  };

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const handleGoBack = () => {
    setShowDetails(false);
  };

  return (
    <div className="bot-card">
      {showDetails ? (
        <BotSpecs bot={bot} enlistBot={handleEnlist} goBack={handleGoBack} />
      ) : (
        <>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={handleViewDetails}>View Details</button>
          <button onClick={handleEnlist}>Enlist</button>
        </>
      )}
    </div>
  );
};

export default BotCard;
