"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?"),
          b = prompt("На сколько оцение его?");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10){
    console.log('Мало просмотров');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classic');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB); 