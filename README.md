#Bot Battlr - React Web App

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our React web application that allows you to browse through a list of robots, view a robot's details, and enlist bots into your army.

Bot Battlr
Table of Contents

    Introduction
    Requirements
    Project Setup
    Technologies Used
    Getting Started
    Features
    Contributing
    License

Introduction

For this project, we've built a React application called "Bot Battlr" that enables users to:

    See profiles of all bots rendered in BotCollection.
    Add an individual bot to their army by clicking on it. The selected bot is enlisted into the YourBotArmy component, but it doesn't disappear from the BotCollection.
    Release a bot from their army by clicking on it. The bot is removed from the YourBotArmy component.
    Discharge a bot from their service forever, by clicking the red button marked "x", which deletes the bot both from the backend and from the YourBotArmy on the frontend.

Optionally, users can also:

    Choose to view bot details in a separate view (BotSpecs) by clicking on the card in the BotCollection.
    Sort bots by their health, damage, or armor using the SortBar component.
    Filter bots by their class (e.g., Support, Medic, Assault, etc.).
    Enlist only one bot from each bot_class in their army.

Requirements

To run this project, you'll need the following:

    Node.js (v12 or higher)
    NPM (Node Package Manager)

Project Setup

Follow these steps to set up the project:

    Clone this repository to your local machine.
    Navigate to the project folder and install the dependencies using the following command:

npm install

    Create a db.json file in the project's root directory to serve as the backend database. Populate it with the bots data in the following format:

json

[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
  // Add more bot objects as needed
]

    Start the JSON Server to serve the backend data by running the following command:

css

json-server --watch db.json --port 3001

    Start the React development server with the following command:

sql

npm start

    Open your browser and visit http://localhost:3000 to see the app in action.

Technologies Used

    React.js
    JSON Server
    HTML5
    CSS3
    JavaScript

Getting Started

    Click on a bot card in the BotCollection to view its details in the BotSpecs component.
    Click the "Enlist" button on a bot card to add it to your army in the YourBotArmy component.
    Click the "Release" button on a bot card in the YourBotArmy to remove it from your army.
    Click the red "x" button in the YourBotArmy to discharge a bot from the frontend and backend.

Optionally:

    Use the SortBar component to sort the bots by their health, damage, or armor.
    Filter bots by their

Author:Brian Martin
Email: martinodhis77@gmail.com
