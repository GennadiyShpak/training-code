/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = Number(
      prompt('Сколько фильмов вы уже посмотрели?'),
    );
    while (!personalMovieDB.count || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i += 1) {
      const question = prompt(`Ваш любимый жанр под номером ${i}`);
      if (!question) {
        i -= 1;
      }
      personalMovieDB.genres.push(question);
    }
    personalMovieDB.genres.forEach((item, i) =>
      console.log(`Любимый жанр #${i + 1} - это ${item}`),
    );
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = true;
    }
    personalMovieDB.privat = false;
  },
};
const {
  rememberMyFilms,
  detectPersonalLevel,
  writeYourGenres,
  showMyDB,
  start,
} = personalMovieDB;
start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();
