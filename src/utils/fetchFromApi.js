import axios from "axios";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      "X-RapidAPI-Key": API_KEY,
    },
    params: {
      maxResults: 50,
    },
  });

  return response.data;
};
