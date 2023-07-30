import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import the axios library for making HTTP requests
import BotCard from './BotCard';
import SortBar from './SortBar';
import YourBotArmy from './YourBotArmy';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    // Fetch bots data from the API using axios
    axios.get('http://localhost:3000/bots')
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleClassFilter = (selectedClass) => {
    setSelectedClasses((prevSelectedClasses) => {
      if (prevSelectedClasses.includes(selectedClass)) {
        return prevSelectedClasses.filter((cls) => cls !== selectedClass);
      } else {
        return [...prevSelectedClasses, selectedClass];
      }
    });
  };

  const filteredBots = selectedClasses.length === 0
    ? bots
    : bots.filter((bot) => selectedClasses.includes(bot.class));

  const sortedBots = sortCriteria
    ? [...filteredBots].sort((a, b) => b[sortCriteria] - a[sortCriteria])
    : filteredBots;

  const enlistBot = (id) => {
    const botToEnlist = bots.find((bot) => bot.id === id);
    setYourBots((prevBots) => [...prevBots, botToEnlist]);
  };

  const releaseBot = (id) => {
    setYourBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setYourBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
      })
      .catch((error) => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <SortBar handleSort={handleSort} />
      <div className="bot-class-filters">
        {['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'].map((botClass) => (
          <label key={botClass}>
            <input
              type="checkbox"
              checked={selectedClasses.includes(botClass)}
              onChange={() => handleClassFilter(botClass)}
            />
            {botClass}
          </label>
        ))}
      </div>
      <div className="bot-collection">
        {sortedBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            buttonText="Enlist"
            buttonAction={enlistBot}
            dischargeAction={dischargeBot}
          />
        ))}
      </div>
      <YourBotArmy
        yourBots={yourBots}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
};

export default BotCollection;