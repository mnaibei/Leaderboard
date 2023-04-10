import './style.css';
import { setTasksToStorage } from './modules/storage.js';

const scores = [
  {
    id: 1,
    name: 'Name',
    score: 100,
  },
  {
    id: 2,
    name: 'Name',
    score: 20,
  },
  {
    id: 3,
    name: 'Name',
    score: 50,
  },
  {
    id: 4,
    name: 'Name',
    score: 78,
  },
  {
    id: 5,
    name: 'Name',
    score: 125,
  },
  {
    id: 7,
    name: 'Name',
    score: 77,
  },
  {
    id: 6,
    name: 'Name',
    score: 42,
  },
];

const displayScores = () => {
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `<label id="${score.id}" class="res">${score.name}: ${score.score}</label>`;
    document.querySelector('.results-board').appendChild(li);
    setTasksToStorage(scores);
  });
};

window.onload = () => {
  displayScores();
};