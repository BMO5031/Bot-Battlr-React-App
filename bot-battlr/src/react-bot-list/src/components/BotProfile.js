// src/components/BotProfile.js
import React from "react";
import "./BotProfile.css";

const BotProfile = ({ bot, selectedBots, onSelect }) => { // <-- Add selectedBots as a prop here
    const handleBotClick = () => {
        onSelect(bot);
    };

  return (
    <div className={`bot-profile ${selectedBots.some((selectedBot) => selectedBot.id === bot.id) ? "selected" : ""}`} onClick={handleBotClick}>
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
      <p>Category: {bot.category}</p>
      <img src={bot.avatar_url} alt={bot.name} />
    </div>
  );
};

export default BotProfile;
