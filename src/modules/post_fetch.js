const game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XYO01EPTyiKsbyR83qNs/scores';

const postScores = async (user, score) => {
  const results = await fetch(game, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user, score,
    }),
  });

  const data = await results.json();
  return data;
};

const fetcher = async () => {
  const res = await fetch(game);
  let output = '';
  const data = await res.json();
  data.result.forEach((user) => {
    const newUser = `<li class"res-display">${user.user}: ${user.score}</li>`;
    output += newUser;
  });
  const displayScores = document.querySelector('.results-board');
  displayScores.innerHTML = output;
};

export { postScores, fetcher };