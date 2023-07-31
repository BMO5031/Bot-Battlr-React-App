// components/BotCollection.js

import React, { useState } from 'react';
import BotCard from './BotCard';
import SortBar from './SortBar';

const BotCollection = ({ bots, enlistBot, yourBotArmy }) => {
  const [selectedClassFilters, setSelectedClassFilters] = useState([]);
  const [sortedBots, setSortedBots] = useState(bots);

  const handleEnlist = (botId) => {
    enlistBot(botId);
  };

  const handleFilterByClass = (botClass) => {
    if (selectedClassFilters.includes(botClass)) {
      setSelectedClassFilters(selectedClassFilters.filter((filter) => filter !== botClass));
    } else {
      setSelectedClassFilters([...selectedClassFilters, botClass]);
    }
  };

  const handleSortByHealth = () => {
    const sortedByHealth = [...sortedBots].sort((a, b) => b.health - a.health);
    setSortedBots(sortedByHealth);
  };

  const handleSortByDamage = () => {
    const sortedByDamage = [...sortedBots].sort((a, b) => b.damage - a.damage);
    setSortedBots(sortedByDamage);
  };

  const handleSortByArmor = () => {
    const sortedByArmor = [...sortedBots].sort((a, b) => b.armor - a.armor);
    setSortedBots(sortedByArmor);
  };

  const filteredAndSortedBots = sortedBots.filter((bot) => {
    return selectedClassFilters.length === 0 || selectedClassFilters.includes(bot.bot_class);
  });

  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <SortBar
        onSortByHealth={handleSortByHealth}
        onSortByDamage={handleSortByDamage}
        onSortByArmor={handleSortByArmor}
      />
      <div className="bot-list">
        {filteredAndSortedBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={handleEnlist} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;

