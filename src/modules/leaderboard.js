const baseUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
const gameId = 'e9hgUU8qvHHdchrqFL6R'; 
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
    console.error('Error getting game scores:', error);
  }
};
