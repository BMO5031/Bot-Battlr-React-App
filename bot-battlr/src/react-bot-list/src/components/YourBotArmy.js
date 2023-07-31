// YourBotArmy.js
import React from "react";

const YourBotArmy = ({ selectedBots }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {selectedBots.length > 0 ? (
        <ul>
          {selectedBots.map((bot) => (
            <li key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <span>{bot.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your bot army is empty.</p>
      )}
    </div>
  );
};

export default YourBotArmy;
