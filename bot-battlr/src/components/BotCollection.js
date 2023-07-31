import React, { useEffect, useState } from 'react';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEnlistBot = (bot) => {
    // Your code for enlisting the bot goes here
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <div>
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <img src={bot.imageURL} alt={bot.name} /> {""}
              <button onClick={() => handleEnlistBot(bot)}>Enlist</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;