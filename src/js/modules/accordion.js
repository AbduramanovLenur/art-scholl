const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.classList.add('animate__animated', 'animate__fadeInUp');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 50 + 'px';
            } else {
                this.nextElementSibling.classList.remove('animate__animated', 'animate__fadeInUp');
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
}

export default accordion;