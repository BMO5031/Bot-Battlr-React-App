import React from "react";

const BotCard = ({ bot, onClick }) => {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
    </div>
  );
};

export default BotCard;
