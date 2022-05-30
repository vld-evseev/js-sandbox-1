"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberFilms(){
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
}

rememberFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Мало просмотров');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Classic');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenre(){
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр #${i}?`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

showMyDB(personalMovieDB.privat);
writeYourGenre();