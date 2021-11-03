import burger from "./modules/burger";
import certificate from "./modules/certificate";

document.addEventListener('DOMContentLoaded', () => {
    burger('.hamburger', '.hamburger__menu', '.hamburger__close');
    certificate('.video__list');

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