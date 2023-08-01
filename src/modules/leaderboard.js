const scoresData = [
    { country: "India", score: 100 },
    { country: "United States", score: 22 },
    { country: "Australia", score: 59 },
    { country: "England", score: 77 },
    { country: "Germany", score: 121 },
    { country: "Japan", score: 109 },
  ];
  
  // Function to arrange countries in order from top scorer
  const arrangeTopScorer = (scores) => {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
      const countries = sortedScores.map((item) => item.country);
  
    return countries;
  };
    const sortedCountries = arrangeTopScorer(scoresData);
  
  // Display the sorted countries in the HTML
  const leaderboardList = document.getElementById('leaderboard-list');
  
  sortedCountries.forEach((country) => {
    const listItem = document.createElement('li');
    listItem.textContent = country;
    leaderboardList.appendChild(listItem);
  });
  