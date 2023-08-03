import { apiLink, gmeId } from './gameId.js'; 
const addScore = async (name, score) => {
  try {
    const response = await fetch(`${apiLink}${gmeId}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score: score,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add score');
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default addScore;
