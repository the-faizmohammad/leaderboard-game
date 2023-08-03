import gameId from './gameId.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const updateScoresList = async () => {
  try {
    const response = await fetch(`${baseUrl}games/${gameId}/scores/`);
    const responseData = await response.json();
    const scores = responseData.result;

    const scoresList = document.querySelector('.scores-list');
    scoresList.innerHTML = '';

    scores.forEach((scoreData) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <p class="country">${scoreData.user}</p>
        <p class="score-value">${scoreData.score}</p>
      `;
      scoresList.appendChild(li);
    });
  } catch (error) {
    // Handle errors here
  }
};

export const addScore = async (user, score) => {
  try {
    const response = await fetch(`${baseUrl}games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });

    if (response.ok) {
      document.getElementById('user-name').value = '';
      document.getElementById('score').value = '';
      await updateScoresList();
    } else {
      throw new Error('Failed to add score');
    }
  } catch (error) {
    // Handle errors here
  }
};

export default gameId;
