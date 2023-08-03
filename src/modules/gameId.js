/* e9hgUU8qvHHdchrqFL6R
    function createNewGame() {
      const apiUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

      const data = {
        name: "My cool new game",
      };

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          const gameIdElement = document.getElementById("gameId");
          gameIdElement.textContent = "Game ID: " + result.result.split(": ")[1];
        })
        .catch((error) => {
          console.error("Failed to create the game:", error);
        });
    } */

const apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gmeId = 'e9hgUU8qvHHdchrqFL6R';

export { apiLink, gmeId };
