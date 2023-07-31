import React from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';

const App = () => {
  return (
    <div>
      <BotCollection />
      <YourBotArmy />
      <BotSpecs />
      <SortBar />
    </div>
  );
};

export default App;