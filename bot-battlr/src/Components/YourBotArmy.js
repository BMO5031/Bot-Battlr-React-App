// YourBotArmy.js

import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ yourBots, releaseBot, dischargeBot }) => {
     // Add a conditional check here to handle the case when yourBots is not defined
  if (!yourBots) {
    return <div>No bots enlisted in your army.</div>;
  }

  return (
    <div className="your-bot-army">
      {yourBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          buttonText="Release"
          buttonAction={releaseBot}
          dischargeAction={dischargeBot}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
 
