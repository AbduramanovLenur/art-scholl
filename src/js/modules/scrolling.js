const scroll = (upSelector) => {
    const upElement = document.querySelector(upSelector);
    upElement.classList.add('animate__animated', 'animate__fadeOut');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElement.classList.add('animate__fadeIn');
            upElement.classList.remove('animate__fadeOut');
        } else {
            upElement.classList.add('animate__fadeOut');
            upElement.classList.remove('animate__fadeIn');
        }
    });
};

export default scroll;