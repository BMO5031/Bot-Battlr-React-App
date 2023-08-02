import React, { useState } from 'react';
import BotSpecs from './BotSpecs'; // Assuming BotSpecs is a component to display bot details

const BotCollection = ({ bots, enlistBot }) => {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  return (
    <div className="bot-collection">
      {selectedBot ? (
        <BotSpecs bot={selectedBot} enlistBot={enlistBot} />
      ) : (
        <div className="row">
          {bots.map((bot) => (
            <div key={bot.id} className="col-4 mb-4" onClick={() => handleBotClick(bot)}>
              <div className="card">
                <img src={bot.avatar_url} alt={bot.name} />
                <div className="card-body">
                  <h5 className="card-title">{bot.name}</h5>
                  <p className="card-text">Health: {bot.health}</p>
                  <p className="card-text">Damage: {bot.damage}</p>
                  <p className="card-text">Armor: {bot.armor}</p>
                  <p className="card-text">Class: {bot.bot_class}</p>
                  <button className="btn btn-primary" onClick={() => enlistBot(bot.id)}>
                    Enlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BotCollection;
