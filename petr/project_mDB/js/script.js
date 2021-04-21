/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};
const { movies } = movieDB;
const refs = {
  comerciaWrapper: document.querySelector('.promo__adv'),
  promoGenre: document.querySelector('.promo__genre'),
  promoBg: document.querySelector('.promo__bg'),
  movieList: document.querySelector('.promo__interactive-list'),
  movieInput: document.querySelector('.adding__input'),
  movieForm: document.querySelector('.add'),
  removeBtn: document.querySelectorAll('.delete'),
  checkbox: document.querySelector('[type="checkbox"]'),
};
const {
  comerciaWrapper,
  promoGenre,
  promoBg,
  movieList,
  movieForm,
  movieInput,
  removeBtn,
  checkbox,
} = refs;
comerciaWrapper.remove();
promoGenre.textContent = 'Драма';
promoBg.style.background = 'url(../img/bg.jpg)';
const createMovieListMarckup = arr => {
  movieList.innerHTML = '';
  arr.sort().forEach((movie, i) => {
    const movieItem = document.createElement('li');
    movieItem.classList.add('promo__interactive-item');
    movieItem.textContent = `${i + 1} ${movie}`;
    const removeBtn = document.createElement('div');
    removeBtn.classList.add('delete');
    movieItem.append(removeBtn);
    movieList.append(movieItem);
    removeBtn.addEventListener('click', e => {
      removeMovieItemHandler(e, i);
    });
  });
};
const addInputValue = (parent, str) => {
  if (!str) {
    return;
  }
  if (str.length > 21) {
    str = `${str.substring(0, 22)}...`;
  }
  parent.push(str.toUpperCase());
};
const formListener = e => {
  e.preventDefault();
  const favorite = checkbox.checked;
  const { target } = e;
  if (target.nodeName === 'BUTTON') {
    addInputValue(movies, movieInput.value);
    createMovieListMarckup(movies);
    movieInput.value = '';
  }
  favorite ? console.log('Добавляем любимый фильм') : null;
};
const getFavoriteMovie = e => {
  const { target } = e;
  !target.checked ? (target.checked = false) : (target.checked = true);
};
movieForm.addEventListener('submit', formListener);
const removeMovieItemHandler = (e, i) => {
  e.target.parentNode.remove();
  movies.splice(i, 1);
  createMovieListMarckup(movies);
};
checkbox.addEventListener('click', getFavoriteMovie);
createMovieListMarckup(movies);
