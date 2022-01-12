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
        "Скотт Пилигрим против...",
        "Логан",
        "Одержимость",
        "Лига справедливости",
        "Ла-ла лэнд"
    ]
};

const reklama = document.querySelectorAll('.promo__adv img');
const janr = document.querySelector('.promo__genre');
const fon = document.querySelector('.promo__bg');
const spisokFilmov = document.querySelector('.promo__interactive-list');

reklama.forEach(item =>{
    item.remove();
})

janr.textContent = "Драма";

fon.style.backgroundImage = "url('img/bg.jpg')";

spisokFilmov.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) =>{
    spisokFilmov.innerHTML += `
    <li class="promo__interactive-item">${i +1}. ${item}
        <div class="delete"></div>
    </li>
    `;
});

//Мой вариант. Он рабочий. Выше вариант из видеоурока более оптимизированный
// movieDB.movies.forEach((item, i) =>{
//     const li = document.createElement('li');
//     const div = document.createElement('div');
//     li.classList.add('promo__interactive-item');
//     div.classList.add('delete');
//     li.innerHTML = `${i+1}. ` + movieDB.movies[i];
//     li.append(div);
//     spisokFilmov.append(li);
// });

