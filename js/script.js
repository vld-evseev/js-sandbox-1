"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a1 = prompt("Один из последних просмотренных фильмов?"),
      b1 = prompt("На сколько оцение его?"),
      a2 = prompt("Один из последних просмотренных фильмов?"),
      b2 = prompt("На сколько оцение его?");

personalMovieDB.movies[a1] = b1;
personalMovieDB.movies[a2] = b2;

console.log(personalMovieDB);