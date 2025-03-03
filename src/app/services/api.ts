import axios from "axios";

const API_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp";

export const fetchMatches = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data.data.matches;
  } catch (error) {
    console.error(error)
  }
};
