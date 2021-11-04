import burger from "./modules/burger";
import gallery from "./modules/gallery";

document.addEventListener('DOMContentLoaded', () => {
    burger('.hamburger', '.hamburger__menu', '.hamburger__close');
    gallery('.video__list', 'video__img');

    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        spaceBetween: 30,
    });
});