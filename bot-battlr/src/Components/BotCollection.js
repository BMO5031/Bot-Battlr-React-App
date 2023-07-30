// BotCollection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

//Function to handle enlisting a bot
const enListBot = (bot) => {
    //Add the bot to yourbots array in YourBotArmy component
    YourBotArmy.enListBot(bot);
}
  useEffect(() => {
    // Fetch data from the local JSON server
    axios.get('http://localhost:3000/bots')
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bot data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
          <button onClick={() => enListBot(bot)}>Enlist</button>
          {/*Add a button to release the bot */}
          {/* <button onClick={() => releaseBot(bot)}>Release</button> */}

          {/* Add a button to enlist the bot */}
          <button>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
