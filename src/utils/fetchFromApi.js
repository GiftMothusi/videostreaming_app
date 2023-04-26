import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(
    `${BASE_URL}/${url}`,
    { params: { maxResults: 50 } },
    {
      headers: {
        "Content-Type": "application/json;charset=ISO-8859-1",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );

  return data;
};
