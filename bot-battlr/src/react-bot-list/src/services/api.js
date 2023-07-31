// src/services/api.js
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

const BASE_URL = "http://localhost:3000"; //The JSON Server URL

export const getAllBots = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bots`);
    console.log(response.data);
     // Add this line to check the fetched data
    return response.data;
  } catch (error) {
    console.error("Error fetching bot data:", error);
    throw error;
  }
};

export default api;