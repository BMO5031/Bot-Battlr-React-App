// src/components/BotCollection.js
import React, { useEffect, useState } from "react";
import { getAllBots } from "../services/api";
import BotProfile from "./BotProfile";

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bot data when the component mounts
    const fetchBots = async () => {
      try {
        const data = await getAllBots();
        setBots(data);
      } catch (error) {
        // Handle error if data fetching fails
      }
    };

    fetchBots();
  }, []);

  return (
    <div className="bot-collection">
      <h1>Bot Collection</h1>
      {bots.map((bot) => (
        <BotProfile key={bot.id} bot={bot} />
      ))}
    </div>
  );
};

export default BotCollection;
