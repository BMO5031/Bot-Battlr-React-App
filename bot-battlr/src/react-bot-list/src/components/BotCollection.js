// BotCollection.js
import React, { useEffect, useState } from "react";
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

  return (
    <div>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotProfile key={bot.id} bot={bot} selectedBots={selectedBots} onSelect={() => handleBotSelection(bot)} />
        ))}
      </div>
      {/* Pass the selectedBots state as props to the YourBotArmy component */}
      <YourBotArmy selectedBots={selectedBots} />
    </div>
  );
};

export default BotCollection;
