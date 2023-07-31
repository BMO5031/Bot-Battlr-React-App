// BotCollection.js
import React, { useEffect, useState } from "react";
import api from '../services/api'; // Add this import
import BotCard from './BotCard';
import BotSpecs from './BotSpecs'; // Import the newly created BotSpecs component
import './BotCollection.css';
import BotProfile from "./BotProfile";
import YourBotArmy from "./YourBotArmy";
import SortBar from './SortBar'; // Import the SortBar component


const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await api.get('/bots');
      setBots(response.data);
    } catch (error) {
      console.error("Error fetching bot data:", error);
    }
  };

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToCollection = () => {
    setSelectedBot(null);
  };

  const handleBotSelection = (bot) => {
    // Check if the bot is already in the selectedBots array
    if (!selectedBots.some((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
    }
    console.log("Selected Bots:", selectedBots);
  };

  // Function to handle bot release
  const handleBotRelease = (bot) => {
    setSelectedBots((prevSelectedBots) => prevSelectedBots.filter((selectedBot) => selectedBot.id !== bot.id));
  };

  // Function to discharge a bot from both backend and frontend
  const handleBotDischarge = async (bot) => {
    try {
      // Discharge the bot from the backend
      await api.delete(`/bots/${bot.id}`);

      // Remove the bot from the selectedBots state in frontend
      setSelectedBots((prevSelectedBots) => prevSelectedBots.filter((selectedBot) => selectedBot.id !== bot.id));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

   // Function to handle sorting the bots
   const handleSortBy = (key) => {
    // Sort the bots array based on the selected key (health, damage, or armor)
    const sortedBots = [...bots].sort((a, b) => b[key] - a[key]);
    setBots(sortedBots);
  };

  return (
    <div className="bot-collection">
       <SortBar sortBy={handleSortBy} /> {/* Add the SortBar component */} 
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBackClick={handleBackToCollection}
          onEnlistClick={handleBotSelection}
        />
      ) : (
        <>
          {bots.map((bot) => (
            <div key={bot.id}>
              <BotProfile bot={bot} selectedBots={selectedBots} onSelect={() => handleBotSelection(bot)} />
              <BotCard bot={bot} onClick={() => handleBotClick(bot)} />
            </div>
          ))}
        </>
      )}
      {/* Pass the selectedBots state as props to the YourBotArmy component */}
      <YourBotArmy selectedBots={selectedBots} onRelease={handleBotRelease} onDischarge={handleBotDischarge} />
    </div>
  );
};

export default BotCollection;
