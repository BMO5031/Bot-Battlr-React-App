import React from 'react';

const YourBotArmy = ({ bots, releaseBot, deleteBotForever }) => {
  return (
    <div className="container">
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="col-4 mb-4">
            <div className="bot-card" onClick={() => releaseBot(bot.id)}>
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <button className="btn btn-danger" onClick={() => releaseBot(bot.id)}>
                Release
              </button>
              <button className="btn btn-outline-danger ml-2" onClick={() => deleteBotForever(bot.id)}>
                Delete Forever
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
