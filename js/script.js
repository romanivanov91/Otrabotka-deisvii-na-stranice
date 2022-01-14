/* Задания на урок 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов

Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту
 */


'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    let addForm = document.querySelector('form.add');
    let addNewFilm = addForm.querySelector('.add button');
    let inputFilm = addForm.querySelector('.adding__input');
    let checkBox = addForm.querySelector('[type="checkbox"]');
    // let deleteFilms = document.querySelectorAll('.delete');
    
    reklama.forEach(item =>{
        item.remove();
    });
    
    janr.textContent = "Драма";
    
    fon.style.backgroundImage = "url('img/bg.jpg')";

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMoviList(films, parents) {
        parents.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) =>{
            parents.innerHTML += `
            <li class="promo__interactive-item">${i +1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoviList(movieDB.movies, spisokFilmov);
            });
        });
    }
    
    
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
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let filmValue = inputFilm.value;
        if (filmValue) {
            if (filmValue.length > 21) {
            filmValue = `${filmValue.substr(0,21)}...`;
            }
            movieDB.movies.push(filmValue);
            sortArr(movieDB.movies); 
            createMoviList(movieDB.movies, spisokFilmov);
            console.log(movieDB.movies);
        }
        if (checkBox.checked == true) {
            console.log('Добавляем любимый фильм');
        }
        event.target.reset();
    });

    createMoviList(movieDB.movies, spisokFilmov);
   
    
    // for (const deleteFilm of deleteFilms) {
    //     deleteFilm.addEventListener('click', () => {
    //         delete movieDB.forEach((film) => {
    //             delete movieDB.movies[film];
    //         });
    //     });
    // }
    
});