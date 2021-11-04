const gallery = (parentSelector, triggerSelector) => {
    const parent = document.querySelector(parentSelector);
    const imgPopup = document.createElement('div');
    const bigImage = document.createElement('img');
    const scroll = calcScrool();

    imgPopup.classList.add('popup');
    parent.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.zIndex = '20'
    imgPopup.classList.remove('animate__animated', 'animate__fadeIn');
    imgPopup.appendChild(bigImage);

    parent.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains(triggerSelector)) {
            imgPopup.classList.add('animate__animated', 'animate__fadeIn');
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.marginRight = `${scroll}px`;
        };

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = `0px`;
        };
    });

    function calcScrool() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
};

export default gallery;