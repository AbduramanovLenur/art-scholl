import burger from "./modules/burger";
import certificate from "./modules/certificate";

document.addEventListener('DOMContentLoaded', () => {
    burger('.hamburger', '.hamburger__menu', '.hamburger__close');
    certificate('.video__list');
});