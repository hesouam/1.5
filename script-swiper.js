var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    centeredSlidesBounds: true,
    watchOverflow: true,

    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

var changeSwiper = function () {
    if (screen.width >= 767) {
        swiper.disable();
    } else {
        swiper.enable();
    }
}

changeSwiper();

window.addEventListener('resize',function(evt) {
    changeSwiper();
});