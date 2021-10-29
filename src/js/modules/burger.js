const burger = (selectorHamburger, selectorMenu, selectorClose) => {
    const hamburger = document.querySelector(selectorHamburger);
    const menu = document.querySelector(selectorMenu);
    const close = document.querySelector(selectorClose);

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

};

export default burger;