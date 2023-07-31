// services/botService.js

const apiUrl = 'http://localhost:3000'; // Change this if your server runs on a different port

export const fetchBots = async () => {
  try {
    const response = await fetch(`${apiUrl}/bots`);
    if (!response.ok) {
      throw new Error('Failed to fetch bots data');
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
