// src/components/BotSpecs.js

import React from 'react';
import BotCard from './BotCard';

const BotSpecs = ({ bot, onEnlist, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to List</button>
      <BotCard bot={bot} />
      <button onClick={onEnlist}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
