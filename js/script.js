'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },

    rememberFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Мало просмотров');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Classic');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {

        const genres = prompt(`Введите жанры через зпт`);

        for (let i = 1; i <= 2; i++) {
            if (genres === '' || genres == null) {
                console.log('Некорректные данные!');
                i--;
            } else {
                this.genres = genres.split(', ');
                this.genres.sort();
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Жанр №${i+1} - это ${item}`);
        });
    },

    toggleVisibility: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};