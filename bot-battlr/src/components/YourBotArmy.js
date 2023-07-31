import React, { useEffect, useState } from 'react';

const YourBotArmy = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    // Fetch enlisted bots from the backend and update the state
    fetch('http://localhost:8001/enlisted-bots')
      .then((response) => response.json())
      .then((data) => {
        setEnlistedBots(data);
      })
      .catch((error) => {
        console.error('Error fetching enlisted bots:', error);
      });
  }, []);

  const handleReleaseBot = (bot) => {
    // Your code for releasing the bot goes here
  };

  const handleDischargeBot = (bot) => {
    // Your code for discharging the bot forever goes here
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {enlistedBots.map((bot) => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            {/* Your code for rendering enlisted bots goes here */}
            <button onClick={() => handleReleaseBot(bot)}>Release</button>
            <button onClick={() => handleDischargeBot(bot)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
