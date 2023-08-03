import { apiLink, gmeId } from './gameId.js'; 
const refreshScore = async () => {
  try {
    const response = await fetch(`${apiLink}${gmeId}/scores`);

    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export default refreshScore;
