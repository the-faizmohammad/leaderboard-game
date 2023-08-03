import './styles.css';
import addScore from './modules/addScore.js';
import refreshScore from './modules/refreshScore.js';

const submitButton = document.getElementById('add-score');
const refreshButton = document.getElementById('scores-refresh');
const nameInput = document.getElementById('user-name');
const scoreInput = document.getElementById('score');
const scoresList = document.querySelector('.scores-list');

submitButton.addEventListener('click', async () => {
  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);
  await addScore(name, score);

  // Clear the input fields after adding the score
  nameInput.value = '';
  scoreInput.value = '';
});

refreshButton.addEventListener('click', async () => {
  // Call the refreshScore function to fetch the scores
  const response = await refreshScore();

  if (!response.ok) {
    return;
  }
  const scores = await response.json();

  scoresList.innerHTML = '';

  scores.result.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.user}: ${item.score}`;
    scoresList.appendChild(li);
  });
});
