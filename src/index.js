import './styles.css';
import { addScore, updateScoresList } from './modules/leaderboard';
const addScoreBtn = document.getElementById('add-score');
const refreshBtn = document.getElementById('scores-refresh');
const gameIdDisplay = document.getElementById('game-id-display');
addScoreBtn.addEventListener('click', async () => {
  const user = document.getElementById('user-name').value.trim();
  const score = parseInt(document.getElementById('score').value);

  if (!user || !score) {
    alert('Please enter a valid name and score.');
    return;
  }

  addScore(user, score);
});

// Event listener for refresh scores
refreshBtn.addEventListener('click', async () => {
  await updateScoresList();
});

// Initial load of scores
updateScoresList();
