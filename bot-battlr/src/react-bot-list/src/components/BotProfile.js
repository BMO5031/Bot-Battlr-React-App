// src/components/BotProfile.js
import React from "react";
import "./BotProfile.css";

const BotProfile = ({ bot }) => {
  return (
    <div className="bot-profile">
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
      <p>Category: {bot.category}</p>
      <img src={bot.avatar_url} alt={bot.name} />
    </div>
  );
};

export default BotProfile;
