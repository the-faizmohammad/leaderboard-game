import { apiLink, gmeId } from './gameId.js';

const refreshScore = async () => fetch(`${apiLink}${gmeId}/scores`);
export default refreshScore;
