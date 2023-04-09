export const setScoresToStorage = (scores) => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

export const getScoresFromStorage = () => {
  const storedScores = localStorage.getItem('scores');
  if (storedScores) {
    return JSON.parse(storedScores);
  }
  return [];
};