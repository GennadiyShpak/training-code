/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
};
const { comerciaWrapper, promoGenre, promoBg, movieList } = refs;
comerciaWrapper.remove();
promoGenre.textContent = 'Драма';
promoBg.style.background = 'url(../img/bg.jpg)';

movieList.innerHTML = '';
movies.sort().forEach((movie, i) => {
  movieList.insertAdjacentHTML(
    'beforeend',
    ` <li class="promo__interactive-item">${i + 1} ${movie}
<div class="delete"></div>
</li>`,
  );
});
