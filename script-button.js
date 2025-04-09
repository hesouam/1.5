var button = document.querySelector('.brands__expend');
var text = button.querySelector('span');
var img = button.querySelector('img');
var page = document.querySelector('.brands__swiper-wrapper');

button.addEventListener('click', function () {
    page.classList.toggle('brands__swiper-wrapper-open');
    img.classList.toggle('brands__expend-rotate');
    if (text.textContent === 'Показать все'){
        text.textContent = 'Скрыть';
    } else {
        text.textContent = 'Показать все';
    }
});

