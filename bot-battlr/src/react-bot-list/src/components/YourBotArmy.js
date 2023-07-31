// YourBotArmy.js
import React from "react";
import './YourBotArmy.css'; // Import the CSS file

const YourBotArmy = ({ selectedBots, onRelease }) => {
  const handleBotRelease = (bot) => {
    onRelease(bot);
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {selectedBots.length > 0 ? (
        <ul>
          {selectedBots.map((bot) => (
            <li key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <span>{bot.name}</span>
              <button onClick={() => handleBotRelease(bot)}>Release</button> {/* Add a release button */}
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
