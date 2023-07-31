import axios from "axios";

const BASE_URL = "http://localhost:3000"; // The JSON Server URL

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllBots = async () => {
  try {
    const response = await api.get("/bots");
    console.log(response.data);
    // Add this line to check the fetched data
    return response.data;
  } catch (error) {
    console.error("Error fetching bot data:", error);
    throw error;
  }
};

export default api;
