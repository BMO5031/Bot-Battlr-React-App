// src/services/api.js
import axios from "axios";

const BASE_URL = "http://localhost:3000"; // The JSON Server URL

export const getAllBots = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bots`);
    return response.data;
  } catch (error) {
    console.error("Error fetching bot data:", error);
    throw error;
  }
};
