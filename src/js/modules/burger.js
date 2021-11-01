const burger = (selectorHamburger, selectorMenu, selectorClose) => {
    const hamburger = document.querySelector(selectorHamburger);
    const menu = document.querySelector(selectorMenu);
    const close = document.querySelector(selectorClose);

    hamburger.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        document.body.style.overflow = 'visible';
        menu.classList.remove('active');
    });

};

export default burger;