import burger from "./modules/burger";
import gallery from "./modules/gallery";
import accordion from './modules/accordion';
import scroll from './modules/scrolling';

document.addEventListener('DOMContentLoaded', () => {
    burger('.hamburger', '.hamburger__menu', '.hamburger__close');
    gallery('.video__list', 'video__img');
    gallery('.work__wrapper', 'work__img');
    accordion('.question__text');
    scroll('.intro-link');

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

    AOS.init();
});