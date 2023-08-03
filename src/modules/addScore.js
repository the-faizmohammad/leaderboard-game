import { apiLink, gmeId } from './gameId.js';

const addScore = (name, score) => fetch(`${apiLink}${gmeId}/scores`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user: name,
    score,
  }),
});
export default addScore;
