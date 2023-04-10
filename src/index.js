import './style.css';
import { postScores, fetcher } from './modules/post_fetch.js';

const submitForm = document.querySelector('.submit');
const scoreValue = document.querySelector('.score');
const nameValue = document.querySelector('.name');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  postScores(nameValue.value, scoreValue.value);
  scoreValue.value = '';
  nameValue.value = '';
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', fetcher);
fetcher();