import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      {enlistedBots.map((bot) => (
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
