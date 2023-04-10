import './style.css';
import { postScores, fetcher } from './modules/post_fetch.js';

const submitForm = document.querySelector('.submit');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const scoreValue = document.querySelector('.score').value;
  const nameValue = document.querySelector('.name').value;
  postScores(nameValue, scoreValue);
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', fetcher);
fetcher();