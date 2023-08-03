import './styles.css';
import addScore from './modules/addScore.js';
import refreshScore from './modules/refreshScore.js';

const submitButton = document.getElementById('add-score');
const refreshButton = document.getElementById('scores-refresh');
const nameInput = document.getElementById('user-name');
const scoreInput = document.getElementById('score');

submitButton.addEventListener('click', async () => {
  const name = nameInput.value;
  const score = parseInt(scoreInput.value);

  // Call the addScore function to save the score to the API
  await addScore(name, score);

  // Clear the input fields after adding the score
  nameInput.value = '';
  scoreInput.value = '';
});

refreshButton.addEventListener('click', async () => {
  // Call the refreshScore function to get the latest scores from the API
  const scores = await refreshScore();

  // Display the scores in the list
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';

  scores.result.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user}: ${item.score}`;
    scoresList.appendChild(li);
  });
});

