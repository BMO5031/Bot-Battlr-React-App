// BotCollection.js
import React, { useEffect, useState } from "react";
import api from '../services/api'; // Add this import
import { getAllBots } from "../services/api";
import BotProfile from "./BotProfile";
import YourBotArmy from "./YourBotArmy";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const botsData = await getAllBots();
      setBots(botsData);
    } catch (error) {
      console.error("Error fetching bot data:", error);
    }
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

  return (
    <div>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotProfile key={bot.id} bot={bot} selectedBots={selectedBots} onSelect={() => handleBotSelection(bot)} />
        ))}
      </div>
      {/* Pass the selectedBots state as props to the YourBotArmy component */}
      <YourBotArmy selectedBots={selectedBots} onRelease={handleBotRelease} onDischarge={handleBotDischarge} />
    </div>
  );
};

export default BotCollection;
