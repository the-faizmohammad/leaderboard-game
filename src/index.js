import './styles.css';
import { addScore, updateScoresList } from './modules/leaderboard.js';

const addScoreBtn = document.getElementById('add-score');
const refreshBtn = document.getElementById('scores-refresh');

// Event listener for add score
addScoreBtn.addEventListener('click', async () => {
  const user = document.getElementById('user-name').value.trim();
  const score = parseInt(document.getElementById('score').value, 10);

  if (!user || Number.isNaN(score)) {
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
