/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

const start = () => {
  numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?'));
  while (!numberOfFilms || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
  }
};
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const rememberMyFilms = () => {
  for (let i = 0; i < 2; i += 1) {
    const lastFavoriteMovie = prompt(
      'Один из последних просмотренных фильмов?',
    );
    const rating = prompt('На сколько оцените его?');
    if (
      !lastFavoriteMovie ||
      !rating ||
      rating.length > 50 ||
      lastFavoriteMovie > 50
    ) {
      i -= 1;
    }
    personalMovieDB.movies[lastFavoriteMovie] = rating;
  }
};
const detectPersonalLevel = () => {
  if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('Вы классический зритель');
  } else if (numberOfFilms >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
};
const showMyDB = () => {
  const { privat } = personalMovieDB;
  if (!privat) {
    console.log(personalMovieDB);
  }
};
const writeYourGenres = () => {
  const { genres } = personalMovieDB;
  for (let i = 1; i < 4; i += 1) {
    const question = prompt(`Ваш любимый жанр под номером ${i}`);
    genres.push(question);
  }
};

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();

console.log('personalMovieDB.movies', personalMovieDB.movies);
console.log('personalMovieDB', personalMovieDB);
