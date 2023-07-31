import React from "react";
import './YourBotArmy.css'; // Import the CSS file

const YourBotArmy = ({ enlistedBots, onRelease, onDischarge }) => {
  const handleBotRelease = (bot) => {
    onRelease(bot);
  };

     // Add a check for enlistedBots existence and its length
  if (!enlistedBots || enlistedBots.length === 0) {
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <p>Your bot army is empty.</p>
      </div>
    );
  }


  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {enlistedBots.length > 0 ? (
        <ul>
          {enlistedBots.map((bot) => (
            <li key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <span>{bot.name}</span>
              <button onClick={() => handleBotRelease(bot)}>Release</button> {/* Add a release button */}
              <button className="discharge-button" onClick={() => onDischarge(bot)}>Discharge</button>
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
